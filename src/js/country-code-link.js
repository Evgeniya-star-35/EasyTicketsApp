import axios from "axios";
import { refs } from "./refs";
import selectMenu from "../templates/selectMenu.hbs";
const API_KEY = "jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";

export default class CountryCodeLinkService {
  constructor() {
    this.searchQuery = "";
    this.countryName = "";
    this.countryCode = "";
    this.page = 1;
  }
  //функция для получения массива events
  async fetchEvents() {
    try {
      const data = await axios.get(
        // ` events.json?keyword=${this.searchQuery}&countryCode=${this.countryCode}&name=${this.countryName}&page=${this.page}&size=24&apikey=${API_KEY}`
        ` events.json?countryCode=${this.countryCode}&name=${this.countryName}&page=${this.page}&size=24&apikey=${API_KEY}`
      );

      this.incrementPage();
      return data.data;
    } catch (error) {
      console.log("Error!");
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
const countryCodeLinkService = new CountryCodeLinkService();
refs.select.addEventListener("click", onFetchCountriesClick);

function onFetchCountriesClick(e) {
  e.preventDefault();
  countryCodeLinkService.fetchEvents().then((data) => {
    renderSelectListDropdown(data._embedded.events);
    // console.log(data);
  });
}

function renderSelectListDropdown(data) {
  const markupDropdown = selectMenu(data);
  refs.select.insertAdjacentHTML("beforeend", markupDropdown);
}
