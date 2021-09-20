import NewsApiService from './fetchEvents';
import { fetchEvs, renderTicketsGallery, saveData } from './fetchSearch';
import { refs } from './refs';
import { modalClose, modalOpen } from './modal';
import { renderFirstWord } from './renderFirstWord';
import { renderPaginationTrandingMovie } from './pagination';

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

  searchAuthor.fetchEvents().then(data => {
    renderTicketsGallery(data._embedded);
    saveData(data._embedded?.events);
    renderPaginationTrandingMovie(data.page.totalPages, searchAuthor.query);
  });
}
