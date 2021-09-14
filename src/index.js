import './sass/main.scss';
// import 'material-icons/iconfont/material-icons.css';
import NewsApiService from './js/fetchEvents';
// import fetchCountries from './js/fetchCountry';
import fetchCountries from './js/fetchCountry';
import galleryItem from './templates/galleryCard.hbs';
import { toggleModal } from './js/modal';
var throttle = require('lodash.throttle');
import  fetchDefaultEvents  from './js/onload'
import { refs } from './js/refs';
// import './js/btnUp';

toggleModal();

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



const upBtn = document.querySelector('[data-up-btn]');

window.addEventListener('scroll', throttle(hideElOnScroll(upBtn), 250));
upBtn.addEventListener('click', toPageTopOnClick);

function hideElOnScroll(el) {
  return function hideOnScroll(e) {
    if (pageYOffset < document.documentElement.clientHeight) {
      el.classList.add('visually-hidden');
    } else {
      el.classList.remove('visually-hidden');
    }
  };
}

function toPageTopOnClick(e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}