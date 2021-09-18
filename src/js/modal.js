import { refs } from './refs';
import modalHbs from '../templates/galleryModalCard.hbs';
import { fetchEvs } from './fetchSearch';
import { saveData } from './fetchSearch';

// function onEventClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//    }
//   modalOpen(e);
// }

export function onEventClick(e) {
  e.preventDefault();

  if (
    (e.target.nodeName !== 'IMG') &
    (e.target.nodeName !== 'H3') &
    (e.target.nodeName !== 'P') &
    (e.target.nodeName !== 'DIV')
  ) {
    return;
  }
  modalOpen(e);
}

// function modalOpen(e) {
//   refs.backdrop.classList.remove('is-hidden');

//   const fetchCardInfo = new NewsApiService();
//   fetchCardInfo
//     .fetchEvents()
//     .then(events => console.log(events))

//     // .then(events => events.map((el, index, array) => {
//     //   renderModalCard(el)
//     // }));
//     .then(events => renderModalCard(events));

//   window.addEventListener('keyup', modalCloseESC);
//   window.addEventListener('click', modalCloseOverlay);
// }
function modalOpen(e) {
  // e.stopPropagation();
  refs.modal.innerHTML = '';
  refs.backdrop.classList.remove('is-hidden');
  const saveData = localStorage.getItem('data');
  const parseData = JSON.parse(saveData);
  parseData.find(el => {
    if (e.target.dataset.source === el.id) {
      // console.log(e.target.dataset.source === el.id);
      renderModalCard(el);
    }
  });

  window.addEventListener('keyup', modalCloseESC);
  window.addEventListener('click', modalCloseOverlay);
}
function renderModalCard(event) {
  const markup = modalHbs(event);
  refs.modal.innerHTML = markup;

}

// модальное окно закрытие
refs.closeButton.addEventListener('click', modalClose);

function modalClose(e) {
  refs.backdrop.classList.add('is-hidden');

  // refs.modal.innerHTML = `<div class="backdrop is-hidden">
  // <div class="modal">
  // <button class="modal__close-button">
  //         <svg class="modal__icon-close" width="17" height="17">
  //             <use href="./images/sprite.svg#icon-close"></use>
  //         </svg>
  //     </button>
  //     </div>
  //     </div>`;

  window.removeEventListener('keyup', modalCloseESC);
  window.removeEventListener('click', modalCloseOverlay);
}

// закрытие по ESC

function modalCloseESC(e) {
  if (e.key !== 'Escape') {
    return;
  }
  modalClose(e);
}

// закрытие по клику на оверлей

function modalCloseOverlay(e) {
  e.stopPropagation();
  if (e.target !== refs.backdrop) {
    return;
  }
  modalClose(e);
}
