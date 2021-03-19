function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
}

function lastpack(numpack) {
    var minNumPack = 3; // Минимальное количество упаковок
    var lastClass = $('.lastpack'); // Объект
    var numpackCookie = getCookie("lastpack");
    var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

    if(numpackCookie == undefined) {
        document.cookie = numpack;
    } else {
        var numpack =  numpackCookie;
    }
    
    if (numpack > minNumPack) {
        numpack--;
        document.cookie = "lastpack="+numpack;
        lastClass.text(numpack);   
    } else {
        lastClass.text(minNumPack);
    }
    clearInterval(timer);
    timer = setInterval(lastpack, randRange(timeArray), numpack);
}

var timer = setInterval(lastpack, 0, 40);


$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });


    $('.scrollTo').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    initializeClock('timer1', deadline);
    initializeClock('timer2', deadline);
    initializeClock('timer3', deadline);
    initializeClock('timer4', deadline);


    var swiper = new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            paginationClickable: !0,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            spaceBetween: 30
        }),
        swiper = new Swiper(".swiper-container-phone", {
            nextButton: ".swiper-button-next-phone",
            prevButton: ".swiper-button-prev-phone",
            spaceBetween: 30
        });

    audiojs.events.ready(function() {
        var as = audiojs.createAll();
    });

});