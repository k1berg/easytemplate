"use strict";$(document).ready(function(){767<$(window).innerWidth()&&($(window).scroll(function(){100<$(this).scrollTop()?$(".scrolltotop").fadeIn():$(".scrolltotop").fadeOut()}),$(".scrolltotop").click(function(){return $("html, body").animate({scrollTop:0},200),!1})),$(".price-form").each(function(){var o=$(this),t=parseFloat(o.find(".price").text()),e=1,i=o.find(".circle-label__num"),l=o.find(".plural"),a=o.find(".price-form__header--plus"),c=o.find(".price-form__header--minus"),n=o.find(".total__price--annual"),r=o.find(".total__price--mounthly"),s=$(this).find(".price-form__item--annual"),d=$(this).find(".price-form__item--mounthly");r.text(e*t),n.text(e*t-e*t*.2),a.click(function(){if(!(e<20))return!1;e++,i.text(e),r.text(e*t),n.text(e*t-e*t*.2),l.show()}),c.click(function(){if(!(1<e))return l.hide(),!1;e--,i.text(e),r.text(e*t),n.text(e*t-e*t*.2),1==e&&l.hide()}),s.click(function(){$(this).addClass("price-form__item--active"),d.removeClass("price-form__item--active"),r.removeClass("total__price--active"),n.addClass("total__price--active")}),d.click(function(){$(this).addClass("price-form__item--active"),s.removeClass("price-form__item--active"),n.removeClass("total__price--active"),r.addClass("total__price--active")})});$(this);var o=$(".top-bar__menu-on-phone"),t=$(".menu__phone"),e=$("body"),i=$(".top-bar"),l=$(".overlay"),a=$(".btn__play"),c=$(".modal"),n=$(".icon--close");function r(){t.removeClass("menu__phone--collapsed"),i.removeClass("top-bar--collapsed"),l.removeClass("overlay--show"),e.removeClass("fixed")}o.click(function(o){o.stopPropagation(),t.addClass("menu__phone--collapsed"),i.addClass("top-bar--collapsed"),l.addClass("overlay--show"),e.addClass("fixed")}),l.click(function(o){o.target.classList.contains("menu-expand")?o.stopPropagation():(r(),e.trigger("close-modal"),c.hide())}),a.click(function(o){l.addClass("overlay--show"),e.addClass("fixed"),e.trigger("open-modal"),c.show()}),n.click(function(){e.trigger("close-modal"),c.hide(),r()}),window._wq=window._wq||[],_wq.push({id:"3ran4wpgnw",onReady:function(o){e.on("open-modal",function(){o.play()}),e.on("close-modal",function(){o.pause()})}});var s=$(".chevron--scroll"),d=$(".pricing--scroll"),p=$(".features--scroll"),f=$("staff--scroll");s.click(function(){return $("html, body").animate({scrollTop:$("#chevron--scroll").offset().top},500),!1}),d.click(function(){return r(),$("html, body").animate({scrollTop:$("#pricing").offset().top},500),!1}),p.click(function(){return r(),$("html, body").animate({scrollTop:$("#features").offset().top},500),!1}),f.click(function(){return $("html, body").animate({scrollTop:$("#features-list").offset().top},500),!1}),$(window).scroll(function(){600<$(this).scrollTop()?i.addClass("top-bar--fixed"):$(this).scrollTop()<600&&i.removeClass("top-bar--fixed")})});