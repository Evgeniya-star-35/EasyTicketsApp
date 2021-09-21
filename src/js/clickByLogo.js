import { refs } from './refs';
import { firstDefaultLoad } from './onload';
import { removeErrorStartLoad } from './error-load-page';

refs.logo.addEventListener('click', onLogoClick);
function onLogoClick() {
  removeErrorStartLoad();
  refs.select.value = '';
  firstDefaultLoad();
}
