import './sass/main.scss';
import NewsApiService from './js/fetchEvents';
import fetchCountries from './js/fetchCountry';
import galleryItem from './templates/galleryCard.hbs';
import  fetchDefaultEvents  from './js/onload';
import { onEventClick } from './js/modal';
import { refs } from './js/refs';
import onModalOpen from './js/modalHbs';
var throttle = require('lodash.throttle');

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
function fetchEvs() {
  newsApiService.fetchEvents().then(events => {
    // console.log(events._embedded);
    renderTicketsGallery(events);
  });
}
export function renderTicketsGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
function clearEventGallery() {
  gallery.innerHTML = '';
}

// модалка
refs.gallery.addEventListener('click', onEventClick);
