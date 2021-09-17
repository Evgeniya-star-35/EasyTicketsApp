import { refs } from './refs';
import Pagination from 'tui-pagination';
import NewsApiService from './fetchEvents';
import { renderTicketsGallery } from '../index';
import galleryItem from '../templates/galleryCard.hbs';
const newsApiService = new NewsApiService();

export function renderPaginationTrandingMovie(totalItems) {
  if (totalItems <= 1) {
    addClassToElement(refs.paginationAnchorRef, 'hidden');
  } else {
    removeClassFromElement(refs.paginationAnchorRef, 'hidden');
  }

  const options = {
    totalItems,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: true,
  };
  const pagination = new Pagination(refs.paginationAnchorRef, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    newsApiService.page = currentPage;

    const renderingPage = () => {
      newsApiService
        .fetchEvents()
        .then(resonse => renderPaginationGallery(resonse._embedded))
        .then(toPageTopOnClick)
        .catch(error => console.log(error));
    };
    setTimeout(renderingPage, 400);
  });
}

function toPageTopOnClick() {
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

function renderPaginationGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.innerHTML = markup;
}

function addClassToElement(ref, className) {
  ref.classList.add(className);
}

function removeClassFromElement(ref, className) {
  ref.classList.remove(className);
}
