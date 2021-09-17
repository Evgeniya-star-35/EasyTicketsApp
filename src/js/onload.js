import axios from 'axios';
const API_KEY = 'jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
import { renderTicketsGallery } from '../index';
// ==PNotify
import { info, notice } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { saveData } from '../index';
export default class NewDefaulteFetchServise {
  constructor() {
    this.keyword = 'Europe';
    this.size = 24;
    this.page = 1;
    this.preferredCountry = '';
  }

  async defaultFetchServise() {
    try {
      const {
        data: { _embedded: events },
      } = await axios.get(
        `events.json?page=${this.page}&size=${this.size}&keyword=${this.keyword}&apikey=${API_KEY}&preferredCountry=${this.preferredCountry}`,
      );

      return events;
    } catch (error) {
      console.log('ERROR!');
    }
  }
}

const defaultServise = new NewDefaulteFetchServise();

defaultServise.defaultFetchServise().then(events => {
  renderTicketsGallery(events);
  console.log(events);
  saveData(events.events);
});

function infoAtFirst() {
  if ('DOMContentLoaded') {
    info({
      title: '😀 Welcome to our site!',
      text: 'Enjoy your time on our website 💖',
      delay: 2750,
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
