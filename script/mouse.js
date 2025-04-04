// Unlike in the 90's we have touch devices.
// you can't have 
function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
  }
  
  if (isTouchDevice()) {
    $("#mouse-trail").css("visibility", "hidden");
  } else {
    $("#mouse-trail").css("visibility", "visible");
  }
  
  // move mouse-trail
  function moveBox(e) {
    TweenMax.to('#mouse-trail', 0.35, {
      css: {
        left: e.pageX,
        top: e.pageY
      }, ease:SlowMo.easeIn
    }
    );
    
    // $('#mouse-trail').css({
    //  'left' : e.pageX,
    //  'top' : e.pageY
    // });
    
  }
  
  $(window).on('mousemove', moveBox);