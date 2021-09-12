import './sass/main.scss';
import NewsApiService from './js/fetchEvents';
import fetchCountries from './js/fetchCountry';
import galleryItem from './templates/gallery.hbs';
var throttle = require('lodash.throttle');

const formSearchEvents = document.querySelector('#search-form');
// const formCountry = document.querySelector('.choose-form');
formSearchEvents.addEventListener('submit', throttle(onSearchEvent, 200));

const newsApiService = new NewsApiService();

function onSearchEvent(e) {
  e.preventDefault();
  newsApiService.searchQuery = e.currentTarget.elements.query.value;
  fetchEvs();
}
function fetchEvs() {
  newsApiService.fetchEvents().then(events => {
    renderTicketsGallery(events);
  });
}
const gallery = document.querySelector('.gallery');
function renderTicketsGallery(events) {
  const markup = galleryItem(events);
  gallery.insertAdjacentHTML('beforeend', markup);
}
