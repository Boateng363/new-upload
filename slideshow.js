let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
let slideshowContainer = document.querySelector(".slideshow-container");
if (slideshowContainer) {
  slideshowContainer.style.width = "10%";
  slideshowContainer.style.height = "100px";
  slideshowContainer.style.margin = "0 auto"; // Center the slideshow
}