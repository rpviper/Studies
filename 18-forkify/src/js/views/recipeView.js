import icons from '../../img/icons.svg'; // Icons were moved to the new location, so we had to import them
import fracty from 'fracty'; // Fractional api
import View from './View.js';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = `We could not find that recipe, please try again!`;
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(event => window.addEventListener(event, handler)) // Is the same as upper two codes combined
    // window.addEventListener('hashchange', controlRecipes) // This is for the hash change, aka when ID is clicked or link
    // window.addEventListener('load', controlRecipes) // This is for when you copy the link to the new window
    // prettier-ignore
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;

      const updateTo = +btn.dataset.updateTo;
      if (updateTo > 0) handler(updateTo); // So the servings don't go below 1
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${
      this._data.title
    } " class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons} #icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this._data.cookingTime
      } </span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons} #icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        this._data.servings
      } </span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings - 1
        }">
          <svg>
            <use href="${icons} #icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings + 1
        }">
          <svg>
            <use href="${icons} #icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
    <svg>
      <use href="${icons}#icon-user"></use>
    </svg>
  </div>
  <button class="btn--round btn--bookmark">
    <svg class="">
      <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
    </svg>
  </button>
</div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
${this._data.ingredients
  .map(ingredient => {
    // This is looping through the ingredients
    // Line 91 if bookmarked, fill the icon, otherwise ignore
    // Line 83 if there is a key, ignore class, otherwise make hidden
    return `
  <li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${icons} #icon-check"></use>
  </svg>
  <div class="recipe__quantity">${
    ingredient.quantity ? fracty(ingredient.quantity).toString() : ''
  } </div> 
  <div class="recipe__description">
    <span class="recipe__unit">${ingredient.unit} </span>
    ${ingredient.description}
  </div>
</li>
  `;
  })
  .join('')} 
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        this._data.publisher
      } </span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl} "
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons} #icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
  } // ${new Fraction(ingredient.quantity).toString()} comes from npm fraction documentantion
} //${ingredient.quantity ? new Fraction(ingredient.quantity).toString() : ''} was done because of some no quantity number was present

export default new RecipeView();
