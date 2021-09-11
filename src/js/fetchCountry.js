import axios from 'axios';
const API_KEY = 'PzrzbFx6KOLu93UpjkE0jgoi6XvAmcaG';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export default async function fetchCountries(searchQuery) {
  try {
    const response = await axios.get(`events.json?&countryCode=${searchQuery}&apikey=${API_KEY}`);

    return response;
  } catch (error) {
    console.log('Error!');
  }
}
