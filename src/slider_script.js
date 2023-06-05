var slides = document.getElementsByClassName("slide");
var prevButton = document.getElementById("prev-btn");
var nextButton = document.getElementById("next-btn");
var currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentIndex].style.display ="flex";
}

function showNextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function showPreviousSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentIndex);
