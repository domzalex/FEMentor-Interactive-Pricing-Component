var money = document.querySelector('.money');
var pageViews = document.querySelector('.views');
var slider = document.querySelector('.slider');

slider.addEventListener('change', () => {
  this['value'] = this.value;
  getValue();
});

function getValue() {
  if (slider.value == 1) {
    money.innerHTML = "$8.00";
    pageViews.innerHTML = "10K PAGEVIEWS";
  }
  if (slider.value == 2) {
    money.innerHTML = "$12.00";
    pageViews.innerHTML = "50K PAGEVIEWS";
  }
  if (slider.value == 3) {
    money.innerHTML = "$16.00";
    pageViews.innerHTML = "100K PAGEVIEWS";
  }
  if (slider.value == 4) {
    money.innerHTML = "$24.00";
    pageViews.innerHTML = "500K PAGEVIEWS";
  }
  if (slider.value == 5) {
    money.innerHTML = "$36.00";
    pageViews.innerHTML = "1M PAGEVIEWS";
  };
};
