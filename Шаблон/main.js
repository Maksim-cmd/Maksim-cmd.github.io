// Кнопка обратной связи
$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 5400)
});


// Бургер меню
$(function(){
    $('.menuToggle').on('click', function() {
        $(this).toggleClass("active");
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });
    });
});



// Слайдер
let slideIndex = 1;
showSlides(slideIndex);
function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}





