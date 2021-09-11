import './sass/main.scss';
import NewsApiService from './js/fetchEvents';
import fetchCountries from './js/fetchCountry';

const form = document.querySelector('#search-form');
const input = document.querySelector('.input');
const inputCountry = document.querySelector('.input-country');
input.addEventListener('input', onSearchEvent);
inputCountry.addEventListener('input', onSearchCountry);

function onSearchCountry(e) {
  const query = e.target.value;
  fetchCountries(query);
}
const newsApiService = new NewsApiService();
input.addEventListener('input', onSearchEvent);
function onSearchEvent(e) {
  //   e.preventDefault();
  newsApiService.searchQuery = e.target.value;
  console.log(e.target.value);
  fetchEvs();
}
function fetchEvs() {
  newsApiService.fetchEvents();
}
