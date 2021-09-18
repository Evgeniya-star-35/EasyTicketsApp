import NewsApiService from './fetchEvents';
import galleryItem from '../templates/galleryCard.hbs';
import { refs } from './refs';
import { success, alert, error, notice } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import { renderPaginationTrandingMovie } from './pagination';

refs.formSearchEvents.addEventListener('submit', onSearchEvent);

const newsApiService = new NewsApiService();

function onSearchEvent(e) {
  e.preventDefault();
  newsApiService.searchQuery = e.currentTarget.elements.query.value;
  clearEventGallery();
  fetchEvs();
  newsApiService.resetPage();
  e.currentTarget.reset();
}

export function fetchEvs() {
  newsApiService.fetchEvents().then(events => {
    renderTicketsGallery(events._embedded);
    saveData(events._embedded.events);

    renderPaginationTrandingMovie(events.page.totalPages, newsApiService.query);
  });
}
export function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
  // data = JSON.parse(localStorage.getItem('data'));
}
export function renderTicketsGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearEventGallery() {
  gallery.innerHTML = '';
}
