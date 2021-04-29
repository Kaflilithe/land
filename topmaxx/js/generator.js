$(document).ready(function () {
    var flag = true;

    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.demon_popup').fadeIn(300);
            flag = false;
        }
    })


    $('.demon_close, .popup_btn, .demon_overflow').click(function () {
        $('.demon_popup').fadeOut(300);
    });

    $('.demon_popup').click(function (e) {
        e.stopPropagation();
    });
});

window.onload = function () {
    var userCity = $(".user-city");

    function checkCity(city) {
        if (!city) {
            return 'Киев'
        }
        return city;
    }
    if (window.ymaps) {
        userCity.text(checkCity(ymaps.geolocation.city));
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://click.lucky.online/click/ip-location.html', false);
        xhr.send();
        if (xhr.status != 200) {
            userCity.text(checkCity(null));
        } else {
            var response = JSON.parse(xhr.responseText);
            userCity.text(checkCity(response.city));
        }
    }
};

$(function () {
    var e = new XMLHttpRequest;
    if (e.open("GET", "https://click.lucky.online/click/ip-location.html", !1), e.send(), 200 === e.status) {
        var t = JSON.parse(e.responseText);
        ! function (t, r) {
            $(".country").text(t), document.getElementsByTagName("body")[0], n(r)
        }(t.country, t.code)
    }

    function n(e) {
        var t, n = 0;
        $("select[name='country']").change(function () {
            0 == n && (n = 1, $(this.children).each(function () {
                this.selected && (sel = $(this).val())
            }), "undefined" == typeof sel && (sel = "RU"),
                "RU" == sel &&
                ($(".country_action").text("всю Украину"),
                    document.getElementsByTagName("body")[0]),
                "KZ" == sel &&
                ($(".country_action").text("всю Украину"),
                    document.getElementsByTagName("body")[0]),
                "BY" == sel &&
                ($(".country_action").text("всю Украину"),
                    document.getElementsByTagName("body")[0]),
                "UA" == sel &&
                ($(".country_action").text("всю Украину"),
                    document.getElementsByTagName("body")[0]),
                n = 0)
        }).change();
    }
});


