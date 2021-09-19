import { refs } from './refs';
import galleryCard from '../templates/galleryCard.hbs';
import selectMenu from '../templates/selectMenu.hbs';
import NewsApiService from './fetchEvents';
import { renderTicketsGallery } from './fetchSearch';

const apiService = new NewsApiService();

refs.select.addEventListener('change', onSelectChange);

function onSelectChange(e) {
  try {
    const countryValue = refs.select.value;
    console.log(countryValue);
    apiService.fetchEvents().then(data =>
      data._embedded.events.filter(el => {
        console.log(el._embedded.venues[0].country.countryCode);
        if (el._embedded.venues[0].country.countryCode === countryValue) {
          renderTicketsGallery(el);
        }
      }),
    );

    // );
  } catch (error) {
    console.log('Error!');
  }
}
function createCountryList(data) {
  const markupData = selectMenu(data);
  refs.selectList.insertAdjacentHTML('beforeend', markupData);
}
// export default onInputValueSearch;
