import { refs } from './refs';
import Pagination from 'tui-pagination';
import NewsApiService from './fetchEvents';
import galleryItem from '../templates/galleryCard.hbs';
import { saveData } from './fetchSearch';
const newsApiService = new NewsApiService();

export function renderPaginationTrandingMovie(totalItems, searchQuery) {
  const options = {
    totalItems,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: true,
  };
  const pagination = new Pagination(refs.paginationAnchorRef, options);
  newsApiService.query = searchQuery;
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    newsApiService.page = currentPage;

    const renderingPage = () => {
      newsApiService
        .fetchEvents()
        .then(response => {
          renderPaginationGallery(response._embedded);
          saveData(response._embedded.events);
        })

        .then(toPageTopOnClick)

        .catch(error => console.log(error));
    };
    setTimeout(renderingPage, 400);
  });
}

export function toPageTopOnClick() {
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

export function renderPaginationGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.innerHTML = markup;
}

export function addClassToElement(ref, className) {
  ref.classList.add(className);
}

export function removeClassFromElement(ref, className) {
  ref.classList.remove(className);
}
