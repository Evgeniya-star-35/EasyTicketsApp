// import countries from '../country.json';
import { refs } from './refs';
import selectMenu from '../templates/selectMenu.hbs';
import axios from 'axios';

refs.buttonSearchCountry.addEventListener('click', searchCountry);
const API_KEY = 'jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL';
// axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const baseURL = 'https://app.ticketmaster.com/discovery-feed/v2/events?';
// export default async function fetchCountry(name) {
//   try {
//     const result = await axios.get(`events.json?countryCode=${name}&apikey=${API_KEY}`);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log('Error!');
//   }
// }
export async function fetchCountries(name) {
  const response = await fetch(`${baseURL}&apikey=${API_KEY}`);
  const resultDate = response.json();
  return resultDate;
}
// const date = fetchCountries(name);
// date.then(res => console.log(res));

async function searchCountry(e) {
  e.preventDefault();
  // const value = e.target.value;
  try {
    const countryFetch = await fetchCountries(country).then(items => console.log(items.countries));
  } catch (error) {
    console.log('Error!');
  }
}
// function markUpList(events) {
//   const render = selectMenu(events);
//   refs.selectList.insertAdjacentHTML('beforeend', render);
// }
// function fetchCountry() {
//   fetchCountries().then(events => markUpList(events));
// }
// поиск со своего бекенда

// formCountry.addEventListener('submit', throttle(onSearchCountry, 200));

// function onSearchCountry(e) {
//   e.preventDefault();
//   const query = e.target.value;
//   createListCountry(query);
// }
// function createListCountry(value) {
//   const markUp = selectMenu(countries);
//   return selectList.insertAdjacentHTML('beforeend', markUp);
// }
