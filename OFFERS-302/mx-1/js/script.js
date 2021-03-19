$(document).ready(function () {
     $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });
 

 $('.js-slider').slick({
      dots: false,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      nextArrow: '.nav-next',
      prevArrow: '.nav-prev',
      appendDots: '.first-dots',
      customPaging : function(slider, i) {
        return '<a class="first-dot"></a>';
    },
    responsive: [
    {
      breakpoint: 800,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

$(window).on('resize', function() {
        $('.js-slider').slick('resize');
    });

       function getDayEnd() {
    var dayEnd = new Date();
    dayEnd.setHours(23, 59, 59);

    return dayEnd;
}
if (window.dayEndTimestamp === undefined) {
    window.dayEndTimestamp = getDayEnd();
}
function getTimeRemaining(endtime) {
    var t       = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours   = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
        'total':   t,
        'hours':   hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initializeClock(id, endtime) {
    var clock       = document.getElementById(id),
        hoursSpan   = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            hoursSpan.innerHTML = ('00');
            minutesSpan.innerHTML = ('00');
            secondsSpan.innerHTML = ('00');
            clearInterval(timeinterval);
        }
    }

    updateClock();

    var timeinterval = setInterval(updateClock, 500);
}

var myClock = (document.cookie && document.cookie.match('myClock')) ?
                (Date.parse(getCookie('myClock')) - Date.now() > -60000) : null;

// if there's a cookie with the name myClock, and timer stoped less then 1 minute (-60000) ago, use that value as the deadline
if (myClock) {
    // get deadline value from cookie
    var deadline = getCookie('myClock');
}
// otherwise, set a deadline 45 minutes from now and
// save it in a cookie with that name
else {
    // create deadline 45 minutes from now
    var timeInMinutes = 45,
        currentTime   = Date.parse(new Date().toString()),
        deadline      = new Date(currentTime + timeInMinutes * 60 * 1000);

    // store deadline in cookie for future reference
    document.cookie = 'myClock=' + deadline;
}
initializeClock('timer', window.dayEndTimestamp);
initializeClock('timer2', window.dayEndTimestamp);
initializeClock('timer3', window.dayEndTimestamp);

    let sliderToggleBlock = function() {
        $('.question-item').on('click', function(){
          $(this).children().eq(1).slideToggle(400);
        });
    }
    let linkChange = function() {
    $('.question-link').on('click', function() {
            $(this).toggleClass('question-link--active');
        });
    }
    $('.question-item').on('click', function() {
            $(this).children().find('.question-linkImg').toggleClass('question-linkImg--active');
        });
    sliderToggleBlock();
    linkChange();
  
});
