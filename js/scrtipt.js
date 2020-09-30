

var html5Slider = document.getElementById("slider");

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
