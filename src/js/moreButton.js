import NewsApiService from './fetchEvents';
import { fetchEvs, renderTicketsGallery, saveData } from './fetchSearch';
import { refs } from './refs';
import { modalClose, modalOpen } from './modal';
import { renderFirstWord } from './renderFirstWord';
import { renderPaginationTrandingMovie } from './pagination';
import { addErrorStartLoad, removeErrorStartLoad } from './error-load-page';
import { addClassToElement, removeClassFromElement } from './actions-functions';

refs.modal.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  const id = e.target.id;

  if (id === 'modal__more-button') {
    modalClose();
  } else {
    return;
  }

  const searchAuthor = new NewsApiService();

  const authorName = document.querySelector('.author-name');
  const fullNameAuthor = authorName.textContent;
  searchAuthor.searchQuery = renderFirstWord(fullNameAuthor);

  searchAuthor
    .fetchEvents()
    .then(data => {
      const newArray = data._embedded?.events.filter(
        el => el.name.split(' ')[0] === searchAuthor.searchQuery,
      );
      searchAuthor.resetPage();
      renderTicketsGallery(newArray);
      if (newArray?.length < 1 || !newArray) {
        addErrorStartLoad();
        addClassToElement(refs.paginationDiv, 'visually-hidden');
      } else {
        removeErrorStartLoad();
        saveData(newArray);
        removeClassFromElement(refs.paginationDiv, 'visually-hidden');
        renderPaginationTrandingMovie(data.page.totalPages, searchAuthor.query);
      }
    })
    .catch(error => console.log(error));
}
