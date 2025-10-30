let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.transform = `translateX(${i < index ? '-100%' : i > index ? '100%' : '0'})`;
  });
  slides[index].classList.add("active");
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

showSlide(currentSlide);
