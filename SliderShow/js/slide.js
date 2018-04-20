var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(sld) {
    showSlides(slideIndex += sld);
}
function currentSlide(sld) {
    showSlides(slideIndex = sld);
}
function showSlides(sld) {
    var slides = document.querySelectorAll('.mySlides');
    var dots = document.querySelector('.dot');
    if (sld > slides.length) {
        slideIndex = 1;
    }    
    if (sld < 1) {
        slideIndex = slides.length;
    }
    for (var i=0; i<slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (var i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

