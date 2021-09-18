import axios from 'axios';
import Pagination from 'tui-pagination';
import { refs } from './refs';
import {
  renderPaginationGallery,
  addClassToElement,
  removeClassFromElement,
  toPageTopOnClick,
} from './pagination';
const API_KEY = 'jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
// ==PNotify
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { saveData } from './fetchSearch';

export default class NewDefaulteFetchServise {
  constructor() {
    this.keyword = 'Rock';
    this.size = 24;
    this.page = 1;
  }

  async defaultFetchServise() {
    try {
      const data = await axios.get(
        `events.json?page=${this.page}&size=${this.size}&keyword=${this.keyword}&apikey=${API_KEY}`,
      );

      return data.data;
    } catch (error) {
      console.log('ERROR!');
    }
  }
  page(currentPage) {
    this.page = currentPage;
  }
}

const defaultServise = new NewDefaulteFetchServise();

defaultServise.defaultFetchServise().then(events => {
  renderPaginationEventsDefault(events.page.totalPages);
  renderPaginationGallery(events._embedded);
  saveData(events._embedded.events);
});

function infoAtFirst() {
  if ('DOMContentLoaded') {
    info({
      title: '🎶 Welcome to our site!',
      text: 'Enjoy your time on our website 💖',
      delay: 2500,
      icons: 'material',
      styling: 'material',
      addModelessClass: 'animate__backInLeft',
    });
  } else {
    error({
      title: 'ERROR!',
      text: '😯 Sorry, We Work with this Problem...',
      delay: 1000,
      icons: 'material',
      styling: 'material',
      addModelessClass: 'animate__bounce',
    });
  }
}

infoAtFirst();

// ==

// window.addEventListener(
//   "DOMContentLoaded",
//   defaultServise.defaultFetchServise()
// );

export function renderPaginationEventsDefault(totalItems) {
  if (totalItems === 0) {
    addClassToElement(refs.paginationAnchorRef, 'hidden');
  } else {
    if (totalItems === 1) {
      addClassToElement(refs.paginationAnchorRef, 'hidden');
    } else {
      removeClassFromElement(refs.paginationAnchorRef, 'hidden');
    }
  }
  if (totalItems <= 1) {
    addClassToElement(refs.paginationAnchorRef, 'hidden');
  } else {
    removeClassFromElement(refs.paginationAnchorRef, 'hidden');
  }
  const options = {
    totalItems,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.paginationAnchorRef, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    defaultServise.page = currentPage;

    const renderingPage = () => {
      defaultServise
        .defaultFetchServise()
        .then(response => {
          renderPaginationGallery(response._embedded);
          saveData(response._embedded.events);
        })
        .then(toPageTopOnClick)
        .catch(error => console.log(error));
    };
    setTimeout(renderingPage, 400);
  });
}
