import icons from '../../img/icons.svg';

// THIS IS THE GENERAL VIEW AREA THAT HANDLES ALL THE MAIN VIEW COMPONENTS IN RECIPEVIEW, SEARCHVIEW AND RESULTSVIEW

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * More info at jsdoc.app
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render = true] In [] means it's optional, default is true. If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render = false
   * @this {Object} View instance
   * @author Raino
   * @todo Display number of pages in between pagination
   * Preform ingredient validation already when typing
   * Shopping list feature: button on recipe to add ingredients to a list
   */

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    // If there is no data, or if the data returns an empty array, or if the data is 0 characters, immediately return and do error message

    this._data = data;
    const markup = this._generateMarkup(); // This is needed for every view to generate the markup
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Creating a new DOM that will be virtual, generated from the _generateMarkup
    const newElements = Array.from(newDOM.querySelectorAll('*')); // Also converting them to array
    // Selecting all the elements from that DOM, pictures included
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    // Selecting all the actual elements that are on the DOM, this is for comaprison purposes
    newElements.forEach((newEl, i) => {
      // Comparing newElements and curElements arrays one item a time
      const curEl = curElements[i];

      // This updates text only:
      if (
        !newEl.isEqualNode(curEl) && // If newEl is not equal to curEl
        newEl.firstChild?.nodeValue.trim() !== '' // This text should not be empty
      ) {
        curEl.textContent = newEl.textContent; // Change the curEl text to newEl text
      }
      // This updates attributes:
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        ); // In here I had the issue of putting after if {} and somehow the code didn't work
    });
  }

  _clear() {
    this._parentElement.innerHTML = ''; // To hide the text that was there originally (sorry no recipes)
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
              <svg>
                <use href="${icons} #icon-loader"></use>
              </svg>
            </div>
      `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
  <div class="recipe">
          <div class="message">
            <div>
              <svg>
                <use href="${icons} #icon-smile"></use>
              </svg>
            </div>
            <p>${message} </p>
          </div>
  `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    // If no error message is passed in we use the default one
    const markup = `
      <div class="error">
      <div>
        <svg>
          <use href="${icons} #icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message} </p>
    </div> 
      `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
