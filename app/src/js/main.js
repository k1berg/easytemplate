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
        if ($totalCounter === 1) {
          $pluralSign.hide();
        }
      } else {
        $pluralSign.hide();
        return false;
      }
    });

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
  var $overlay = $('.overlay');
  var $play = $('.btn__play');
  var $modal = $('.modal');
  var $close = $('.icon--close');
  var $roll = $('.menu__who-uses--roll');

  function openMenu() {
    $menu.addClass('menu__phone--collapsed');
    $bar.addClass('top-bar--collapsed');
    $overlay.addClass('overlay--show');
    $body.addClass('fixed');
  }

  function closeMenu() {
    $menu.removeClass('menu__phone--collapsed');
    $bar.removeClass('top-bar--collapsed');
    $overlay.removeClass('overlay--show');
    $body.removeClass('fixed');
  }

  $button.click(function(e) {
    e.stopPropagation();
    openMenu();
  });

  $overlay.click(function(e) {
    if (e.target.classList.contains('menu-expand')) {
      e.stopPropagation();
    } else {
      closeMenu();
      $body.trigger('close-modal');
      $modal.hide();
    }
  });

  $play.click(function(e) {
    e.preventDefault();
    $overlay.addClass('overlay--show');
    $body.addClass('fixed');
    $body.trigger('open-modal');
    $modal.show();
  });

  $close.click(function() {
    $body.trigger('close-modal');
    $modal.hide();
    closeMenu();
  });


  window._wq = window._wq || [];

  _wq.push({
    id: '3ran4wpgnw',
    onReady: function(video) {
      video.pause();

      $body.on('open-modal', function() {
        video.play();
      });
      $body.on('close-modal', function() {
        video.pause();
      });
    }
  });


  var $chevron = $('.chevron--scroll');
  var $pricing = $('.pricing--scroll');
  var $features = $('.features--scroll');
  var $staff = $('staff--scroll');

  $chevron.click(function() {
    $("html, body").animate({
      scrollTop: $('#chevron--scroll').offset().top
    }, 500);
    return false;
  });

  $pricing.click(function() {
    closeMenu();
    $("html, body").animate({
      scrollTop: $('#pricing').offset().top
    }, 500);
    return false;
  });

  $features.click(function() {
    closeMenu();
    $("html, body").animate({
      scrollTop: $('#features').offset().top
    }, 500);
    return false;
  });

  $staff.click(function() {
    $("html, body").animate({
      scrollTop: $('#features-list').offset().top
    }, 500);
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $bar.addClass('top-bar--fixed');
      $('body').addClass('top-padding');

    } else if ($(this).scrollTop() < 450) {
      $bar.removeClass('top-bar--fixed');
      $('body').removeClass('top-padding');
    }
  });

  (function geolocation_links() {
    var country = "";
    var countryLinks = {
      UK: "https://belliata.co.uk/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      IN: "https://belliata.co.in/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      ES: "https://belliata.es/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      US: "https://belliata.com/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      MX: "https://belliata.mx/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      NZ: "https://belliata.co.nz/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      AR: "https://belliata.com.ar/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      CA: "https://belliata.ca/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      ZA: "https://belliata.co.za/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      CO: "https://belliata.co/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect",
      default: "https://belliata.com/sign-up?utm_source=bss&utm_medium=link&utm_campaign=detect-global"
    };

    var loginLinks = {
      UK: "https://belliata.co.uk/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      IN: "https://belliata.co.in/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      ES: "https://belliata.es/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      US: "https://belliata.com/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      MX: "https://belliata.mx/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      NZ: "https://belliata.co.nz/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      AR: "https://belliata.com.ar/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      CA: "https://belliata.ca/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      ZA: "https://belliata.co.za/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      CO: "https://belliata.co/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp",
      default: "https://belliata.com/sign-up?utm_source=bss&utm_medium=link&utm_campaign=login-lp"
    };

    var countrySpan = $(".geolocation__country");
    var countryLink = $(".geolocation__link");
    var error = false;

    $.get('https://extreme-ip-lookup.com/json/', function(result) {

      country = result.countryCode;
      if (countryLinks[country]) {
        if (countryLink.hasClass("geolocation__link--lp")) {
          countryLink.attr("href", loginLinks[country]);
        } else {
          countryLink.attr("href", countryLinks[country]);
        }
        countrySpan.eq(0).text(result.country);
        countrySpan.eq(1).text(country);
      } else {
        if (countryLink.hasClass("geolocation__link--lp")) {
          countryLink.attr("href", loginLinks["default"]);
        } else {
          countryLink.attr("href", countryLinks["default"]);
        }
        countrySpan.eq(0).text(result.country);
        countrySpan.eq(1).text("Global");
      }


    }).fail(function(err) {
      error = true;
    });
  })();

  $(".top-bar__create-schedule").click(function(e) {
    e.preventDefault();
    $.scrollTo(".section__global-software", 300);
  });

  $(".heading-block__button--ident.btn__create").click(function(e) {
    e.preventDefault();
    $.scrollTo(".section__global-software", 300);
  });

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
  }
  var continent = $(".continent").text().trim();
  if (continent == "EU") {
      $(".vat").show();
  }*/
});
