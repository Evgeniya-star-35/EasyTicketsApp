import selectMenu from "../templates/selectMenu.hbs";
import countryJson from "../country.json";
import { refs } from "./refs";

refs.select.addEventListener("click", onSelectClick);

function onSelectClick() {
  const markup = selectMenu(countryJson);
  refs.select.insertAdjacentHTML("beforeend", markup);
}
