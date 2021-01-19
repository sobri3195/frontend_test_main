let sliderIndex = 1;
slidersImage(sliderIndex);

function nextPrev(image) {
  slidersImage(sliderIndex += image);
}

function slidersImage(image) {
  let i;
  const slides = document.getElementsByClassName("slider");

  if (image > slides.length) {
    sliderIndex = 1
  } else if (image < 1) {
    sliderIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[sliderIndex - 1].style.display = "block";  
}