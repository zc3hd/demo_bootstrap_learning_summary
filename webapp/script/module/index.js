$(function() {
  function resizeW() {
    var w = $(window).width();
    console.log(w);
    var key = w < 768 ? true : false;
    var arr = $('#cc_carousel .carousel-inner>.item');
    arr.each(function(i, ele) {

      // ----小屏幕
      if (key) {
        var val = $(ele).html();
        if (val) {
          return;
        }
        $(ele).html('<img src=' + $(ele).attr('data-xm') + ' alt="">');
      }
      // -----不是小屏幕
      else {
        $(ele).html('');
        $(ele).css('backgroundImage', 'url("' + $(ele).attr('data-lg') + '")');
      }
    })
  }
  $(window).on('resize', resizeW).trigger('resize');
  $('[data-toggle="tooltip"]').tooltip();
});
