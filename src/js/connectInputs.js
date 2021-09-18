import { refs } from './refs';
import galleryCard from '../templates/galleryCard.hbs';
import selectMenu from '../templates/selectMenu.hbs';
import NewsApiService from './fetchEvents';

const apiService = new NewsApiService();

refs.select.addEventListener('change', onInputValueSearch);

function onInputValueSearch(e) {
  try {
    let countryValue = e.target.value;
    apiService
      .fetchEvents()
      .then(data =>
        createCountryList(
          data._embedded.events.map((el, arr, ind) => el._embedded.venues[0].country.name),
        ),
      );
    console.log(
      apiService
        .fetchEvents()
        .then(data =>
          createCountryList(
            data._embedded.events.map((el, arr, ind) => el._embedded.venues[0].country.name),
          ),
        ),
    );
  } catch (error) {
    console.log('Error!');
  }
}
function createCountryList(data) {
  const markupData = selectMenu(data);
  refs.selectList.insertAdjacentHTML('beforeend', markupData);
}
export default onInputValueSearch;