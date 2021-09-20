import { refs } from './refs';
import { firstDefaultLoad } from './onload';

refs.logo.addEventListener('click', onLogoClick);
function onLogoClick() {
  refs.select.value = '';
  firstDefaultLoad();
}
