var removed = false
$(window).on("load", function() {

  /*
  setTimeout(function() {
    $('#topText').show().addClass('animated fadeInLeft');
    //$('#date').show().addClass('animated fadeInUp');
  }, 1000);
  */
  setTimeout(function() {
    $('#pic').show().addClass('animated fadeInRight');
  }, 250);

  setTimeout(function() {
    $('#email').show().addClass('animated fadeInUp');
  }, 1500);

  setTimeout(function() {
    $('#name').show().addClass('animated fadeIn');
  }, 250);

$('.main').waypoint(function() {
  $('.topMatter').remove();
});

$(window).scroll(function() {
  console.log('scrolling!');
  let height = $(window).scrollTop();
  let windowHeight = $(window).height();
  if (height > windowHeight/8) {
    $('.topMatter').css({
      opacity: function() {
        console.log((windowHeight - height) / windowHeight);
        return (windowHeight - height) / windowHeight;
      }
    });
  }
});

  /*
  $('#papers .image').dimmer({
    on: 'hover'
  });
  */


});
