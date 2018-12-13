'use strict';
$(document).ready(function() {
    // Scroll to top
    if ($(window).innerWidth() > 767) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrolltotop').fadeIn();
            } else {
                $('.scrolltotop').fadeOut();
            }
        });
        $('.scrolltotop').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 200);
            return false;
        });
    }

    function isInt(n) {
        return Number(n) === n && n % 1 === 0;
    }
    var $priceform = $('.price-form');
    $priceform.each(function() {
        var $this = $(this);
        var $limit = 20;
        var $price = parseFloat($this.find(".price").text());
        var $discount = .2;
        var $totalCounter = 1;
        var $totalCounterPlaceholder = $this.find(".circle-label__num");
        var $pluralSign = $this.find(".plural");
        var $plusButton = $this.find(".price-form__header--plus");
        var $minusButton = $this.find(".price-form__header--minus");
        var $totalPrice_annual = $this.find(".total__price--annual");
        var $totalPrice_monthly = $this.find(".total__price--mounthly");
        var $annual = $(this).find('.price-form__item--annual');
        var $mounthly = $(this).find('.price-form__item--mounthly');
        $totalPrice_monthly.text($totalCounter * $price);
        $totalPrice_annual.text(($totalCounter * $price) - ($totalCounter * $price * $discount));
        $plusButton.click(function() {
            if ($totalCounter < $limit) {
                $totalCounter++;
                $totalCounterPlaceholder.text($totalCounter);
                $totalPrice_monthly.text($totalCounter * $price);
                $totalPrice_annual.text(($totalCounter * $price) - ($totalCounter * $price * $discount));
                $pluralSign.show();
            } else {
                return false;
            }
        });
        $minusButton.click(function() {
            if ($totalCounter > 1) {
                $totalCounter--;
                $totalCounterPlaceholder.text($totalCounter);
                $totalPrice_monthly.text($totalCounter * $price);
                $totalPrice_annual.text(($totalCounter * $price) - ($totalCounter * $price * $discount));
                if ($totalCounter == 1) {
                    $pluralSign.hide();
                }
            } else {
                $pluralSign.hide();
                return false;
            }
        })
        $annual.click(function() {
            $(this).addClass('price-form__item--active');
            $mounthly.removeClass('price-form__item--active');
            $totalPrice_monthly.removeClass('total__price--active');
            $totalPrice_annual.addClass('total__price--active');
        });
        $mounthly.click(function() {
            $(this).addClass('price-form__item--active');
            $annual.removeClass('price-form__item--active');
            $totalPrice_annual.removeClass('total__price--active');
            $totalPrice_monthly.addClass('total__price--active');
        });
    });
    var $this = $(this);
    var $button = $('.top-bar__menu-on-phone');
    var $menu = $('.menu__phone');
    var $body = $('body');
    var $bar = $('.top-bar');
    var $open = $('.open');
    var $openMenu = $('.open-menu');
    var $expand = $('.menu-expand');
    var $play = $('.btn__play')
    var $video = $('.wistia_embed')

    function openMenu() {
        $menu.addClass('menu__phone--collapsed');
        $bar.addClass('top-bar--collapsed');
        $open.addClass('open-menu');
        $body.addClass('fixed');
    };

    function closeMenu() {
        $menu.removeClass('menu__phone--collapsed');
        $bar.removeClass('top-bar--collapsed');
        $open.removeClass('open-menu');
        $body.removeClass('fixed');
    };

    $button.click(function(e) {
    	e.stopPropagation();
        openMenu();
    });

    $open.click(function(e) {
        if(e.target.classList.contains('menu-expand')) {
        	e.stopPropagation();
        }
        else {
        	console.log(e);
        	closeMenu();
        	$video.pause();
        	$video.hide();
        }
    })

    $play.click(function(e){
    	e.preventDefault();
    	$open.addClass('open-menu');
    	$body.addClass('fixed');
    	$video.show();
    })
    /*switch (country) {
    case "GB":
        var currency = $(".total-currency").text($(".uk-currency").text());
        var price = parseFloat($(".uk-price").text());
        break;
    case "FR":
        var currency = $(".total-currency").text($(".fr-currency").text());
        var price = parseFloat($(".fr-price").text());
        break;
    case "DE":
        var currency = $(".total-currency").text($(".de-currency").text());
        var price = parseFloat($(".de-price").text());
        break;
    case "au":
        var currency = $(".total-currency").text($(".au-currency").text());
        var price = parseFloat($(".au-price").text());
        break;
    default:
        var currency = $(".total-currency").text("$");
        var price = parseFloat($(".us-price").text());
        break;
    }*/
    var continent = $(".continent").text().trim();
    if (continent == "EU") {
        $(".vat").show();
    }
});