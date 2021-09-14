import './sass/main.scss';
import 'material-icons/iconfont/material-icons.css';
import NewsApiService from './js/fetchEvents';
import fetchCountries from './js/fetchCountry';
import galleryItem from './templates/galleryCard.hbs';
import { toggleModal } from './js/modal';
var throttle = require('lodash.throttle');
import  fetchDefaultEvents  from './js/onload'
console.log(fetchDefaultEvents);

toggleModal();

const formSearchEvents = document.querySelector('#search-form');
formSearchEvents.addEventListener('submit', onSearchEvent);
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
    renderTicketsGallery(events);
  });
}
const gallery = document.querySelector('#gallery');
function renderTicketsGallery(events) {
  const markup = galleryItem(events);
  gallery.insertAdjacentHTML('beforeend', markup);
}
function clearEventGallery() {
  gallery.innerHTML = '';
}
