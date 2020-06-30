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









