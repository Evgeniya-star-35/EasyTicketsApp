import {
  success,
  alert,
  error,
  notice,
} from "../../node_modules/@pnotify/core/dist/PNotify.js";
export function onError() {
  error({
    title: " ATTANTION!",
    text: "Please enter correct data! ☝",
    delay: 1000,
    icons: "material",
    styling: "material",
    addModelessClass: "animate__animated animate__heartBeat",
  });
}
