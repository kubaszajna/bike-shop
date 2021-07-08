const body = document.querySelector("body");
const modal = document.querySelector(".modal");

// const scrollDown = document.querySelector(".scroll-down");
// let isOpened = false;

// const openModal = () => {
//   modal.classList.add("is-open");
//   body.style.overflow = "hidden";
// };

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

// window.addEventListener("scroll", () => {
//   if (window.scrollY > window.innerHeight / 3 && !isOpened) {
//     isOpened = true;
//     scrollDown.style.display = "none";
//     openModal();
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(function () {
//     console.log(modalButton);
//     closeButton.addEventListener("click", closeModal);
//     modalButton.addEventListener("click", openModal);
//   }, 4000);
// });

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};
