import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js'; // recipeView is any name, but it's best to keep it as is
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1); // To insert the hash id into the fetch function below
    if (!id) return;
    recipeView.renderSpinner(); // That's the parentEl

    // To highlight the active resultsview line:
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks); // To highlight the same line also in bookmarksview

    // Loading recipe:
    await model.loadRecipe(id); // Since it's an async function, you need the await keyword

    // Rendering recipe:
    recipeView.render(model.state.recipe); // render comes from recipeview
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get search query:
    const query = searchView.getQuery();
    if (!query) return; // Guard clause if there is no query

    // Load search result:
    await model.loadSearchResults(query);
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);

    // Render results:
    resultsView.render(model.getSearchResultsPage()); // Starting from page 1

    // Render initial pagination buttons:
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};
// controlSearchResults();

const controlPagination = function (goToPage) {
  // Render NEW results:
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render pagination buttons:
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Increase servings amount

  // Update the recipe servings (in state):
  model.updateServings(newServings);

  // Update the recipe view:
  // recipeView.render(model.state.recipe); // It will render the whole page, including the picture, asking for more resources
  recipeView.update(model.state.recipe); // Takes less resources since it only updates the text area
};

const controlAddBookmark = function () {
  // Add/remove bookmark:
  if (!model.state.recipe.bookmarked)
    model.addBookmark(model.state.recipe); // If there is no bookmark, add
  else model.deleteBookmark(model.state.recipe.id); // If there is bookmark, delete it (remove the bookmark)

  // Update recipe view:
  recipeView.update(model.state.recipe);

  // Render bookmarks:
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    // Upload the new recipe data:
    await model.uploadRecipe(newRecipe);

    // Render recipe:
    recipeView.render(model.state.recipe);

    // Success message:
    addRecipeView.renderMessage();

    // Render bookmarks view:
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL (since it stays the same as previous ID):
    window.history.pushState(null, '', `#${model.state.recipe.id}`); // Changing the URL without reloading the page

    // Close the form window that's open when you click add recipe:
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
