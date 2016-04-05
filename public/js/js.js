$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
  $('.res-menu-button').click(function() {
    if ($('.res-menu').css("display") != "none") {
      $('.res-menu').slideUp(1000);
    }
    else {
      $('.res-menu').slideDown(1000);
    }
  });
});

$(function() {
  $('.form-submit').mousedown(function() {
    $('.form-submit').addClass("pressed");
  });
  $('.form-submit').mouseup(function() {
    $('.form-submit').removeClass("pressed");
  });
});

$(window).scroll(function() {
  var scrollPos = $(window).scrollTop(),
  aboutPos = $('.about-wrapper').offset().top,
  servicePos = $('.services-wrapper').offset().top,
  productPos = $('.products-wrapper').offset().top,
  teamPos = $('.team-wrapper').offset().top,
  contactPos = $('#contact').offset().top;

  if (scrollPos >= aboutPos && scrollPos < servicePos) {
    $('.link-a').addClass('selected');
  }
  else {
    $('.link-a').removeClass('selected');
  }

  if (scrollPos >= servicePos && scrollPos < teamPos) {
    $('.link-b').addClass('selected');
  }
  else {
    $('.link-b').removeClass('selected');
  }

  if (scrollPos >= teamPos && scrollPos < productPos) {
    $('.link-d').addClass('selected');
  }
  else {
    $('.link-d').removeClass('selected');
  }

  if (scrollPos >= productPos && scrollPos < contactPos) {
    $('.link-c').addClass('selected');
  }
  else {
    $('.link-c').removeClass('selected');
  }

  if (scrollPos >= contactPos) {
    $('.link-e').addClass('selected');
  }
  else {
    $('.link-e').removeClass('selected');
  }

});



 // TEAM RANDOMIZED, FOR MOBILE VIEW

 var cards = $(".stylist-mobile");
 for(var i = 0; i < cards.length; i++){
     var target = Math.floor(Math.random() * cards.length -1) + 1;
     var target2 = Math.floor(Math.random() * cards.length -1) +1;
     cards.eq(target).before(cards.eq(target2));
 }

 // TEAM ON CLICK SHOW BIO
 var $contents = $('.stylist-content');
 $contents.slice(1).hide();
 $('.stylist-mobile').click(function() {
   var $target = $('#' + this.id + 'show').show();
   $contents.not($target).hide();
 });
