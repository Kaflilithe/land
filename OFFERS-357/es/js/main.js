

$( document ).ready(function() {


// скролл к форме
  // $("main").on("click","a", function (event) {
  //   event.preventDefault();

  //   var id  = $(this).attr('href'),

  //       top = $(id).offset().top;

  //   $('body,html').animate({scrollTop: top}, 1200);
  //   // $('#username-2').focus();
  // });

   $('.reviews__slick').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 200,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      arrow: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

   $('.reviews__slick-2').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      arrow: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

  //  var o = $('#old-prise-1').find('span').text();

  // var n = $('#new-prise-1').find('span').text();

  // var e = o - n;

  // // console.log(e);

  // $('.eco-price').html(e);



   setTimeout(function() {
     $('.wellcome__button-desc').html('Остаток товара по акции: <b class="b-mid">6шт</b>');
  }, 3000);

   setTimeout(function() {
     $('.wellcome__button-desc').html('Остаток товара по акции: <b class="b-mid">5шт</b>');
  }, 8000);

   setTimeout(function() {
     $('.wellcome__button-desc').html('Остаток товара по акции: <b class="b-mid">4шт</b>');
  }, 9000);

   setTimeout(function() { 
     $('.wellcome__button-desc').html('Остаток товара по акции: <b class="b-low">3шт</b>');
  }, 16000);

  // Модальное окно
  var modal = document.getElementById("myModal");
  var btn = $('.myBtn');
  var span = document.getElementsByClassName("close")[0];

  $('.myBtn').on("click", function (event) {
    $('#myModal').fadeIn(400);
  })

  span.onclick = function() {
    $('#myModal').fadeOut(400);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      $('#myModal').fadeOut(400);
    }
  }

 // Модальное окно
  var modal = document.getElementById("myModal");
  var btn = $('.myBtn');
  var span = document.getElementsByClassName("close")[0];

  $('.myBtn').on("click", function (event) {
    $('#myModal').fadeIn(400);
  })

  span.onclick = function() {
    $('#myModal').fadeOut(400);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      $('#myModal').fadeOut(400);
    }
  }


  
  var modal2 = document.getElementById("myModal2");
  var btn2 = $('.myBtn2');
  var span2 = document.getElementsByClassName("close2")[0];

  $('.myBtn2').on("click", function (event) {
    $('#myModal2').fadeIn(400);
  })

  span2.onclick = function() {
    $('#myModal2').fadeOut(400);
  }

  window.onclick = function(event) {
    if (event.target == modal2) {
      $('#myModal2').fadeOut(400);
    }
  }




});






// background-image: url(../img/much.png);