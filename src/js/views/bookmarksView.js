import icons from 'url:../../img/icons.svg';
import previewViews from './previewViews.js';
import View from './View.js';

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewViews.render(bookmark, false))
      .join('');
  }
}

export default new BookMarksView();
