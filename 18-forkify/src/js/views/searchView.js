class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value; // This is the search field class from index.html
    this._clearInput();
    return query;
  } // We have to store the variable so we can return it later (the conts query part)

  _clearInput() {
    // Clears the field once search completes
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      // Clicking search button or pressing enter both work
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
