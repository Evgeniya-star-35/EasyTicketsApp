import './sass/main.scss';
import NewsApiService from './js/fetchEvents';
import fetchCountries from './js/fetchCountry';

const formSearchEvents = document.querySelector('#search-form');
// const formCountry = document.querySelector('.choose-form');
formSearchEvents.addEventListener('input', onSearchEvent);
// formCountry.addEventListener('submit', onSearchCountry);

// function onSearchCountry(e) {
//   e.preventDefault();
//   const query = e.target.value;
//   fetchCountries(query);
// }
const newsApiService = new NewsApiService();

function onSearchEvent(e) {
  e.preventDefault();
  newsApiService.searchQuery = e.target.value;
  fetchEvs();
}
function fetchEvs() {
  newsApiService.fetchEvents();
}
