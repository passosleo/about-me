button = document.getElementById("top-button");

window.onscroll = function() {showButton()};

function showButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};