import axios from 'axios';
const API_KEY = 'jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  //функция для получения массива events
  async fetchEvents() {
    try {
      const {
        data: { _embedded: events },
      } = await axios.get(
        `events.json?keyword=${this.searchQuery}&page=${this.page}&size=20&apikey=${API_KEY}`,
      );

      this.incrementPage();
      console.log(events);
      return events;
    } catch (error) {
      console.log('Error!');
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
