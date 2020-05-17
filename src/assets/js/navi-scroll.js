/* navigation bar colour change */
var top1 = $('#title').offset().top;
var top2 = $('#body').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#change').css('background-color', '');
  } else if (scrollPos >= top2) {
    $('#change').css('background-color', '#333');
  }
});