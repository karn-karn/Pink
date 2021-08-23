  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var headerBackground = document.querySelector('.page-header');
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      headerBackground.classList.add('page-header--opened');

    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      headerBackground.classList.remove('page-header--opened');
    }
  });

const formSent = document.querySelector(".form__button");
const formPopup = document.querySelector(".page__modal");
const formClose = formPopup.querySelector(".modal__close");


formSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-show");
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      formPopup.classList.remove("modal-show");
    }
  }
});
