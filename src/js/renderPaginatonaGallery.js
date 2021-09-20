import galleryItem from '../templates/galleryCard.hbs';
import { refs } from './refs';

export function renderPaginationGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.innerHTML = markup;
}
