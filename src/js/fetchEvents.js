import axios from "axios";
const API_KEY = "jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";
export default class NewsApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;  
    this.countryCode = "";
  }
  //функция для получения массива events
  async fetchEvents() {
    try {
      const data = await axios.get(

        `events.json?keyword=${this.searchQuery}&page=${this.page}&countryCode=${this.countryCode}&size=24&apikey=${API_KEY}`
      
      );
      this.incrementPage();
      return data.data;
    } catch (error) {
      console.log("Error!");
    }
  }

  page(currentPage) {
    this.page = currentPage;
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
