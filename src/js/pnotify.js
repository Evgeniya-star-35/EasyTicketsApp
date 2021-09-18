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


// defoultstyle

// .pnotify {
//   position: absolute !important;
//    top: 225px !important;
//    width: 100% !important;
   
// }

// .pnotify-container {
//   width: 100% !important;
// }

// .pnotify-text {
// display: flex;
// justify-content: center;
// }

// .pnotify-pre-line {
//   color: #Fee;
//   text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em rgb(255, 13, 191),
//     0 0 0.5em rgb(255, 13, 191), 0 0 0.1em rgb(255, 13, 191), 0 10px 3px #000;
//     font-size: 22px;
//     font-weight: 600;
//     text-align: center;

//     @include for-size(phone-plus-only) {
//       max-width: 420px;
//       text-align: center;
//     }
    
// }

// [data-pnotify] .brighttheme-container {
//   background-color: transparent !important;
// }

// [data-pnotify] .brighttheme-error {
//   background-image: none !important;
// }

// [data-pnotify] .brighttheme-icon-error:after {
//   display: none !important;
// }

// [data-pnotify] .brighttheme-icon-closer:after {
//   display: none !important;
// }

// [data-pnotify] .brighttheme-icon-sticker.brighttheme-icon-stuck:after {
//   display: none !important;
// }
