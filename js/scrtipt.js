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
