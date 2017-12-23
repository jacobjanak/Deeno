$(function() {

  // Fade in
  $('#landing-page-container').show()
  $('#logo').fadeIn(1000, function() {
    $('#slogan').fadeIn(1000, function() {
      $('#next-arrow').fadeIn(1000, function() {
        $('#next-arrow > i').addClass('pulse')
      })
    })
  })

  /*
  $('#next-arrow').on('click', function() {
    const windowWidth = $(window).width();
    $('#landing-page-container').animate({
      left: -windowWidth,
      right: windowWidth,
    }, windowWidth * 2, function() {
      $('#landing-page-container').hide()
    })
  }) */
})
