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
console.log(countries);
import selectMenu from '../templates/selectMenu.hbs';

function createListCountry(countries) {
  const markUp = selectMenu(countries);
  selectList.insertAdjacentHTML('beforeend', markUp);
}
const selectList = document.querySelector('.select');
const searchButton = document.querySelector('.search');
searchButton.addEventListener('submit', createListCountry);
