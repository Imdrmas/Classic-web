// globale $, alert, console

$(function () {

  // trigger nicescroll

  $('html').niceScroll({

    cursorcolor: '#F7600e',

    cursorwidth: '10px',

    cursorborder: '1px solid #F7600e'

  });

// header height

$('.header').height($(window).height());

//scroll to features

$('.header .arrow i').click(function () {

  $('hmtl, body').animate({

    scrollTop: $('.features').offset().top

  }, 1000);
});

$('.hire').click(function () {

  $('hmtl, body').animate({

    scrollTop: $('.our-team').offset().top

  }, 1000);

});

// show hidden items from work

$('.show-more').click(function(){

$('.our-work .hidden').fadeIn(1000);

});
// show hidden items our work

$('.our').click(function () {

  $('hmtl, body').animate({

    scrollTop: $('.topp').offset().top

  }, 1000);

});


// check testimonials

var leftArrow = $('.testim .fa-chevron-left'),
    rightArrow = $('.testim .fa-chevron-right');

    function checkClients(){

 $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

 $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    }

checkClients();

$('.testim i').click(function (){

if ($(this).hasClass('fa-chevron-right')) {

  $('.testim .active').fadeOut(100, function () {

    $(this).removeClass('active').next('.client').addClass('active').fadeIn();

    checkClients();

  });

} else {

  $('.testim .active').fadeOut(100, function () {

    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

    checkClients();

    });
}

});

});
