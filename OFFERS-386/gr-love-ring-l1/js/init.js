$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    times = function(){
        now = new Date();
        hour = 24-now.getHours();
        hour = ((hour+'').length==1?hour='0'+hour:hour)+'';
        minu = 60-now.getMinutes();
        minu = ((minu+'').length==1?minu='0'+minu:minu)+'';
        secu = 60-now.getSeconds();
        secu = ((secu+'').length==1?secu='0'+secu:secu)+'';
       $('.timer').html(''+
          '<div class="timer-item">'+
          '<div class="count">'+hour+'</div>'+
          '<div class="text">ώρες</div>'+
          '</div>'+
          '<div class="timer-item">'+
          '<div class="count">'+minu+'</div>'+
          '<div class="text">λεπτά</div>'+
          '</div>'+
          '<div class="timer-item">'+
          '<div class="count">'+secu+'</div>'+
          '<div class="text">δευτερ.</div>'+
          '</div>');
    };
    times();
    setInterval(times,1000);

    $('.rev-slider').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 659,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

});

