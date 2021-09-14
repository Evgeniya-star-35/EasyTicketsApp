// import { refs } from './refs';
// import modalHbs from '../templates/galleryModalCard.hbs';
// import NewsApiService from './fetchEvents';

// refs.gallery.addEventListener('click', onModalOpen);
// console.log(refs.backdrop);
// export function onModalOpen(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   refs.backdrop.classList.remove('is-hidden');
//   refs.backdrop.classList.add('modal');
// }
// function renderModalCard(events) {
//   const markup = modalHbs(events);
//   refs.modal.insertAdjacentHTML('beforeend', markup);
// }
// const fetchCardInfo = new NewsApiService();
// fetchCardInfo.fetchEvents().then(events => renderModalCard(events));
