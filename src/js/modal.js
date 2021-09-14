import { refs } from './refs';

// function onEventClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//    }
//   modalOpen(e);
// }

export function onEventClick(e) {
  e.preventDefault();

  if (e.target.nodeName!=="IMG"
      &e.target.nodeName!=="H3"
      &e.target.nodeName!=="P"
      &e.target.nodeName!=="DIV") {
    return;
  }
  modalOpen(e);
}

function modalOpen(e) {
  refs.backdrop.classList.remove('is-hidden');

  window.addEventListener('keyup', modalCloseESC);
  window.addEventListener('click', modalCloseOverlay);
}

// модальное окно закрытие
refs.closeButton.addEventListener('click', modalClose);

function modalClose(e) {
  refs.backdrop.classList.add('is-hidden');

  window.removeEventListener('keyup', modalCloseESC);
  window.removeEventListener('click', modalCloseOverlay);
}

// закрытие по ESC

function modalCloseESC(e) {
  if(e.key !== 'Escape') {
    return;
  }
  modalClose(e);
}

// закрытие по клику на оверлей

function modalCloseOverlay(e) {
  e.stopPropagation();
  if(e.target !== refs.backdrop) {
    return;
  }
  modalClose(e);
}