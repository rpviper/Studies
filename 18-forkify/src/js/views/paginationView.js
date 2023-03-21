import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline'); // This just chooses the button to press
      if (!btn) return;

      const goToPage = +btn.dataset.goto; // This actually goes to that page

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    ); // Math.ceil to the highest number

    // Page 1 and there are other pages:
    if (curPage === 1 && numPages > 1) {
      // If the page is one and more pages are available
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons} #icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Last page:
    if (curPage === numPages && numPages > 1) {
      // numPages > 1 is needed because otherwise only 1 page and this would be the same
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons} #icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1} </span>
          </button>
      `;
    }

    // Other page:
    if (curPage < numPages) {
      // Aka if somewhere in the middle
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons} #icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1} </span>
          </button>
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons} #icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Only one page:
    return ''; // Return no page number
  }
}

export default new PaginationView();
