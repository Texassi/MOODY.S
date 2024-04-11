$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin:10, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        onTranslate: function(event) {
            $('.item:nth-child(' + (event.item.index + 1) + ')').fadeOut();
        },
        onTranslated: function(event) {
            $('.item:nth-child(' + (event.item.index + 1) + ')').fadeIn();
        },
        responsive:{ //Адаптация в зависимости от разрешения экрана
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
})
