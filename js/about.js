// The code here handles when the img_scroll icon disappears

(function ($) {
  $.fn.hasScrollBar = function () {
    return this.get(0).scrollHeight > this.get(0).clientHeight;
  };
})(jQuery);

if ($("body").hasScrollBar()) {
  $("#img_scroll").css("visibility", "visible");
}

$(window).on("wheel", function () {
  if (event.deltaY > 0) {
    $("#img_scroll").fadeOut(800);
    $(window).off("wheel");
  }
});

var startY;

$(window).on("touchstart", function (event) {
  var touch = event.originalEvent.touches[0];
  startY = touch.clientY;
});

$(window).on("touchmove", function (event) {
  if (!startY) {
    return;
  }

  var touch = event.originalEvent.touches[0];
  var deltaY = touch.clientY - startY;

  if (deltaY < 0) {
    $("#img_scroll").fadeOut(800);
    $(window).off("touchmove");
  } else {
    startY = touch.clientY;
  }
});

$(window).on("touchend", function () {
  startY = null;
});
