$(document).ready(function() {
  if ($(window).width() < 500) {
    $("#navbar2").css( { right : 0 } );
    $("#navbar2").css( { width : 0 } );
    $("#navbar2").css( { right : 0 } );
    $("#navbar").css( { width : 0 } );
    $("#navbar").css( { right : 0 } );
    $("#main_content").css( { marginRight : 0 } );
    $("#button").css( { display : "block" } );
  }
  else {
    $("#navbar").css( { width : 150 } );
    $("#navbar").css( { right : 0 } );
    $("#navbar2").css( { width : 0 } );
    $("#main_content").css( { marginRight : 160 } );
    $("#button").css( { display : "none" } );
  }
  $(window).resize(function() {
    if ($(window).width() < 500) {
      $("#navbar").css( { width : 0 } );
      $("#navbar").css( { right : 0 } );
      $("#navbar2").css( { width : 0 } );
      $("#navbar2").css( { right : 0 } );
      $("#main_content").css( { marginRight : 0 } );
      $("#button").css( { display : "block" } );
    }
    else {
      $("#navbar").css( { width : 150 } );
      $("#navbar").css( { right : 0 } );
      $("#navbar2").css( { width : 0 } );
      $("#main_content").css( { marginRight : 160 } );
      $("#button").css( { display : "none" } );
    }
  });
  $('#button').click(function() {
    $("#navbar").css( { width : 150 } );
  });
  $('#button').mouseenter(function() {
    $('#button').fadeTo('fast', 1)
  });
  $('#button').mouseleave(function() {
    $('#button').fadeTo('fast', 0.5)
  });
});