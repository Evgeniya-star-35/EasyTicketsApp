import axios from 'axios';
const API_KEY = 'PzrzbFx6KOLu93UpjkE0jgoi6XvAmcaG';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchEvents() {
    try {
      const {
        _embedded: { events },
      } = await axios.get(
        `events.json?keyword=${this.searchQuery}&page=${this.page}&size=20&apikey=${API_KEY}`,
      );

      this.incrementPage();
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
