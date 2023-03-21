import { API_URL, RESULTS_PER_PAGE, KEY } from './config.js';
import { AJAX } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    // This is for searching recipes
    query: '',
    results: [],
    page: 1, // Setting the pagination to start from 1 by default
    resultsPerPage: RESULTS_PER_PAGE,
  },
  bookmarks: [], // Will push recipes into this array when added
};

const createRecipeObject = function (data) {
  const { recipe } = data.data; // Comes again from console
  return {
    // This was to get rid of the underscores_ that came from json
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
    // Is the same as key: recipe.key, but only if the key exists
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`); // Personalizing my recipe with my key, so it comes first in search
    state.recipe = createRecipeObject(data);

    // Checking if recipe is already bookmarked or not:
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(`${err} 💀💀💀`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }), // So the side items also have user icon
      };
    });
    state.search.page = 1;
    // When we search for a new recipe, it will stay on the page old search shows (for example 3)
    // So we have to do this to get it back starting from page 1
  } catch (err) {
    console.error(`${err} 💀💀💀`);
    throw err;
  }
};
// loadSearchResults('pizza'); // Only for control purpose, because it's called in the controller

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0  // We want to have 10 items per page
  const end = page * state.search.resultsPerPage; // 9 // Aka from 0 - 9, since arrays are 0 based
  // Page 2 => 2 - 1 = 1 * 10 = 10 // 2 * 10 = 20

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newqt = oldqt * newservings / oldservings // 2 * 8 / 4 = 4
  });
  state.recipe.servings = newServings; // Have to do it here so 69 also remains its original value
};

const addLocalStorage = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark:
  state.bookmarks.push(recipe);
  // Mark current recipe as bookmarked:
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  addLocalStorage();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id); // To find the bookmark to delete
  state.bookmarks.splice(index, 1); // To delete the bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false; // Mark the recipe as not bookmarked anymore

  addLocalStorage();
};

const getLocalStorage = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
getLocalStorage();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(
        // First we make the list back to an array
        entry => entry[0].startsWith('ingredient') && entry[1] !== ''
        // Entry starts with an ingredient (look at the forkify page add recipe) and then second can't be empty
      )
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim()); // Taking an array
        if (ingArr.length !== 3) throw new Error('Wrong ingredient format!'); // So there is always 3 items in the line
        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description }; // And restructuring as an object
      }); // If there is a quantity, turn it into string, and if there's no quantity, return null

    const recipe = {
      // Here now we went to save to the original object, so need to reverse the items
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe); // ?key= part comes from the URL that's not in the API_URL
    state.recipe = createRecipeObject(data); // To make the data look the same as it was received from API
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
