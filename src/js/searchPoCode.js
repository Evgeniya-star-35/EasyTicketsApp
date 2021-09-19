import { refs } from './refs';
import galleryCard from '../templates/galleryCard.hbs';
// import selectMenu from '../templates/selectMenu.hbs';
// import { saveData } from './fetchSearch';
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import NewsApiService from './fetchEvents';
import { renderPaginationTrandingMovie } from './pagination';
import { renderTicketsGallery, clearEventGallery, saveData } from './fetchSearch';
import { onInfoSearch } from './pnotify';
import axios from 'axios';
const API_KEY = 'jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

const apiService = new NewsApiService();
// class newFetchCountry {
//   constructor()
// }

refs.select.addEventListener('change', onSelectChange);

function onSelectChange(e) {
  try {
    const countryValue = refs.select.value;
    console.log(countryValue);
    apiService.countryCode = countryValue;
    clearEventGallery();
    fetchCodes();
    // newsApiService.resetPage();

    // apiService.fetchEvents().then(data => createByCountry(data._embedded));
    // const saveData = localStorage.getItem('data');
    // const parseData = JSON.parse(saveData);
  } catch (error) {
    console.log('Error!');
  }
}
function fetchCodes() {
  apiService.fetchEvents().then(data => {
    console.log(data);
    if (data.page.totalElements === 0) {
      return onInfoSearch();
    }
    renderTicketsGallery(data._embedded);
    saveData(data._embedded?.events);
    renderPaginationTrandingMovie(data.page.totalPages, apiService.query);
  });
}

// export default onInputValueSearch;
