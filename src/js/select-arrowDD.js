export const select = document.querySelector("select");
select.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "SELECT") {
      ev.target.classList.add("pink-polygon");
    }
  },
  false
);
