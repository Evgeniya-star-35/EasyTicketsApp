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
import countries from '../country.json';
import selectMenu from '../templates/selectMenu.hbs';
const formCountry = document.querySelector('.choose-form');
const selectList = document.querySelector('.select');

function createListCountry(value) {
  const markUp = selectMenu(countries);
  return selectList.insertAdjacentHTML('beforeend', markUp);
}

// formCountry.addEventListener('input', createListCountry);
formCountry.addEventListener('input', onSearchCountry);

function onSearchCountry(e) {
  e.preventDefault();
  const query = e.target.value;
  createListCountry(query);
}
