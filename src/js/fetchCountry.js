// import countries from '../country.json';
import selectMenu from '../templates/selectMenu.hbs';
import axios from 'axios';
const formCountry = document.querySelector('.choose-form');
const selectList = document.querySelector('.select');

formCountry.addEventListener('submit', searchCountry);
const API_KEY = 'PzrzbFx6KOLu93UpjkE0jgoi6XvAmcaG';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export default async function fetchCountries(country) {
  try {
    const {
      data: { _embedded: events },
    } = await axios.get(`events.json?&keyword=${country}&page=1&size=20&apikey=${API_KEY}`);
    console.log(events);
    return events;
  } catch (error) {
    console.log('Error!');
  }
}

function searchCountry(e) {
  e.preventDefault();
  const value = e.currentTarget.elements.query.value;
  fetchCountries(value);
}
function markUpList(events) {
  const render = selectMenu(events);
  selectList.insertAdjacentHTML('beforeend', render);
}
function fetchCountry() {
  fetchCountries().then(events => markUpList(events));
}
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
