let catalogPage = document.querySelector('.catalog-page');
if (catalogPage != null) {
  var html5Slider = document.querySelector('#slider');

  noUiSlider.create(html5Slider, {
    start: [10, 15000],
    connect: true,
    range: {
      "min": 0,
      "max": 20000
    }
  });

  var inputNumber = document.getElementById("input-number");
  var inputNumber2 = document.getElementById("input-number-2");
  html5Slider.noUiSlider.on("update", function (values, handle) {

    var value = values[handle];

    if (handle) {
      inputNumber.value = Math.round(value);
    } else {
      inputNumber2.value = Math.round(value);
    }
  });
  inputNumber.addEventListener("change", function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
  inputNumber2.addEventListener("change", function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
}


// слайдер
let promoSlider = function () {
  let buttons = document.querySelectorAll(".slider-dots__dot");
  let slides = document.querySelectorAll(".slider-item");
  for (let i = 0; i <= buttons.length - 1; i++) {
    buttons[i].onclick = function () {
      if (i === 0) {
        buttons[0].classList.add('slider-dots__dot--current');
        buttons[1].classList.remove('slider-dots__dot--current');
        buttons[2].classList.remove('slider-dots__dot--current');
        slides[0].classList.add('slider-item--current');
        slides[1].classList.remove('slider-item--current');
        slides[2].classList.remove('slider-item--current');
      } else if (i === 1) {
        buttons[1].classList.add('slider-dots__dot--current');
        buttons[0].classList.remove('slider-dots__dot--current');
        buttons[2].classList.remove('slider-dots__dot--current');
        slides[1].classList.add('slider-item--current');
        slides[0].classList.remove('slider-item--current');
        slides[2].classList.remove('slider-item--current');
      } else if (i === 2) {
        buttons[2].classList.add('slider-dots__dot--current');
        buttons[0].classList.remove('slider-dots__dot--current');
        buttons[1].classList.remove('slider-dots__dot--current');
        slides[2].classList.add('slider-item--current');
        slides[0].classList.remove('slider-item--current');
        slides[1].classList.remove('slider-item--current');
      }
    };
  }
};
let slider = document.querySelector(".slider");
if (slider != null) {
  promoSlider();
} else {
};

// модальное окно обратной связи
let contactsPopup = document.querySelector(".contacts-popup ");
if (contactsPopup != null) {
  let contactBody = contactsPopup.querySelector(".contacts-popup__body");
  let popupBtn = document.querySelector(".contacts__btn");
  popupBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsPopup.classList.add("contacts-popup--open");
  });
  let contactsPopupClose = document.querySelector(".contacts-popup__close");
  contactsPopupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsPopup.classList.remove("contacts-popup--open");
    contactBody.classList.remove("contacts-popup__body--error");
    contactsForm.reset();
  });
  let contactsForm = contactsPopup.querySelector(".contacts-popup__form");
  let loginName = contactsPopup.querySelector("#contact-name");
  let loginEmail = contactsPopup.querySelector("#contact-email");
  contactsForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginEmail.value) {
      evt.preventDefault();
      contactBody.classList.remove("contacts-popup__body--error");
      contactBody.offsetWidth = contactBody.offsetWidth;
      contactBody.classList.add("contacts-popup__body--error");
      if (!loginName.value) {
        loginName.classList.add("main-input--error");
      } else loginName.classList.remove("main-input--error");
    } else {
      localStorage.setItem("login", loginName.value);
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (contactsPopup.classList.contains("contacts-popup--open")) {
        evt.preventDefault();
        contactsPopup.classList.remove("contacts-popup--open");
        contactBody.classList.remove("contacts-popup__body--error");
        loginName.classList.remove("main-input--error");
      }
    }
  });
};

