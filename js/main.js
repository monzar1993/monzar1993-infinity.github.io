$(document).ready(function () {

  // More-social-media-links
  $('.more-social-media-links').click(function (){
      $('.toggle-menu-social-media-links').fadeToggle('fast', 'linear');
    });

    //Responsive-nav-menu
    $('.responvise-logo-img').click(function (){
        $('.responsive-navigation').fadeToggle('fast', 'linear');
      });


    // Contents-Slider
  $('.contents-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    vertical: true,
  });

  // First-Tabs
  $('#menu-tabs li').click(function(){
  	var thisClass = this.className.slice(0,2);
  	$('div.t1').hide();
  	$('div.t2').hide();
  	$('div.t3').hide();
  	$('div.' + thisClass).fadeIn(500);
  	$('#menu-tabs li').removeClass('active');
  	$(this).addClass('active');
  	return false;
  });
  $('li.t1').click();

  // Second-Tabs
  $('#menu-tabs-2 li').click(function(){
  	var thisClass = this.className.slice(0,3);
  	$('div.r1').hide();
  	$('div.r2').hide();
  	$('div.r3').hide();
    $('div.r4').hide();
  	$('div.' + thisClass).fadeIn(500);
  	$('#menu-tabs-2 li').removeClass('active');
  	$(this).addClass('active');
  	return false;
  });
  $('li.r1').click();


  // Comments-Slider
  $('.comments-slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  centerMode: true
  });


  var show = true;
      var countbox = ".c-o-c-block";
      $(window).on("scroll load resize", function () {
          if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
          var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
          var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
          var w_height = $(window).height(); // Высота окна браузера
          var d_height = $(document).height(); // Высота всего документа
          var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
          if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
              $('.benefits__number').css('opacity', '1');
              $('.benefits__number').spincrement({
                  thousandSeparator: "",
                  duration: 1500
              });

              show = false;
          }
      });

});
