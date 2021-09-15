import axios from "axios";
const API_KEY = "jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";
import { renderTicketsGallery } from "../index";

export default class NewDefaulteFetchServise {
  constructor() {
    this.locale = "*";
    this.keyword = "Europe";
    this.size = 24;
    this.page = 1;
    this.preferredCountry = "";
  }

  async defaultFetchServise() {
    try {
      const {
        data: { _embedded: events },
      } = await axios.get(
        `events.json?page=${this.page}&size=${this.size}&keyword=${this.keyword}&apikey=${API_KEY}&preferredCountry=${this.preferredCountry}&locale=${this.locale}`
      );

      return events;
    } catch (error) {
      console.log("ERROR!");
    }
  }
}

const defaultServise = new NewDefaulteFetchServise();

defaultServise
  .defaultFetchServise()
  .then((events) => renderTicketsGallery(events));

window.addEventListener(
  "DOMContentLoaded",
  defaultServise.defaultFetchServise()
);