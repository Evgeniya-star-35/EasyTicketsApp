import { refs } from "./refs";
import modalHbs from "../templates/galleryModalCard.hbs";
import { fetchEvs, renderTicketsGallery } from "./fetchSearch";
import { saveData } from "./fetchSearch";
import NewApiService from "./fetchEvents";

export function onEventClick(e) {
  e.preventDefault();

  if (
    (e.target.nodeName !== "IMG") &
    (e.target.nodeName !== "H3") &
    (e.target.nodeName !== "P") &
    (e.target.nodeName !== "DIV")
  ) {
    return;
  }
  modalOpen(e);
}

export function modalOpen(e) {
  e.stopPropagation();
  refs.modal.innerHTML = "";
  refs.backdrop.classList.remove("is-hidden");
  const saveData = localStorage.getItem("data");
  const parseData = JSON.parse(saveData);
  
  parseData.find((el) => {
    if (e.target.dataset.source === el.id) {
      renderModalCard(el);
    }
  });

  window.addEventListener("keyup", modalCloseESC);
  window.addEventListener("click", modalCloseOverlay);
  refs.modal.addEventListener('click', onCloseButtonClick);
  
}

function renderModalCard(event) {
  const markup = modalHbs(event);
  // refs.modal.innerHTML = markup;
  refs.modal.insertAdjacentHTML("beforeend", markup);
}

// модальное окно закрытие


function onCloseButtonClick(e) {
  const id = e.target.id;
  if (id === 'modal__close-icon'
    || id === 'modal__close-path1'
    || id === 'modal__close-path2') {
    modalClose();
  } 
}


export function modalClose(e) {
  refs.backdrop.classList.add("is-hidden");
  window.removeEventListener("keyup", modalCloseESC);
  window.removeEventListener("click", modalCloseOverlay);
}

// закрытие по ESC
function modalCloseESC(e) {
  if (e.key !== "Escape") {
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

refs.gallery.addEventListener("click", onEventClick);
