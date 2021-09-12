// import axios from 'axios';
// const API_KEY = 'PzrzbFx6KOLu93UpjkE0jgoi6XvAmcaG';
// axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

// export default async function fetchCountries(searchQuery) {
//   try {
//     const response = await axios.get(`events.json?&geoPoint=${searchQuery}&apikey=${API_KEY}`);

//     return response;
//   } catch (error) {
//     console.log('Error!');
//   }
// }

// поиск со своего бекенда
import countries from '../country.json';
import selectMenu from '../templates/selectMenu.hbs';
var throttle = require('lodash.throttle');
const formCountry = document.querySelector('.choose-form');
const selectList = document.querySelector('.select');

formCountry.addEventListener('submit', throttle(onSearchCountry, 200));

function onSearchCountry(e) {
  e.preventDefault();
  const query = e.target.value;
  createListCountry(query);
}
function createListCountry(value) {
  const markUp = selectMenu(countries);
  return selectList.insertAdjacentHTML('beforeend', markUp);
}
