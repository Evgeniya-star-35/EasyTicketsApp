import "./sass/main.scss";
import NewsApiService from "./js/fetchEvents";
import "./js/fetchSearch";
import "./js/searchByCode";
import "./js/renderJson";
import galleryItem from "./templates/galleryCard.hbs";
import fetchDefaultEvents from "./js/onload";
import { onEventClick } from "./js/modal";
import { refs } from "./js/refs";
import "./js/btnUp";
import closePreloader from "./js/preloader";
import {
  success,
  alert,
  error,
  notice,
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/BrightTheme.css";
import "./js/pnotify";
import { renderPaginationTrandingMovie } from "./js/pagination";
import "./js/select-arrowDD";
var throttle = require("lodash.throttle");
import { openModal, closeModalHandler } from "./js/teamLightbox";
import "../node_modules/basiclightbox";
import "./js/moreButton";
import "./js/renderFirstWord";
import './js/clickByLogo';

