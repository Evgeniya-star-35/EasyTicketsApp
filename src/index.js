import "./sass/main.scss";
import NewsApiService from "./js/fetchEvents";
// import './js/connectInputs';
import "./js/renderJson";
// import fetchCountries from './js/fetchCountry';

import galleryItem from './templates/galleryCard.hbs';
import fetchDefaultEvents from './js/onload';
import { onEventClick } from './js/modal';
import { refs } from './js/refs';
import './js/btnUp';
import onModalOpen from './js/modalHbs';
import closePreloader from './js/preloader';
import { success, alert, error, notice } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import { renderPaginationTrandingMovie } from './js/pagination';


var throttle = require('lodash.throttle');



refs.formSearchEvents.addEventListener("submit", onSearchEvent);
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
  newsApiService.fetchEvents().then((events) => {
    renderTicketsGallery(events._embedded);

    renderPaginationTrandingMovie(events.page.totalPages);

  });
}

export function renderTicketsGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

function clearEventGallery() {
  gallery.innerHTML = "";
}
// модалка
refs.gallery.addEventListener("click", onEventClick);


