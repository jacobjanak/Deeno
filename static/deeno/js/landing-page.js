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

  // Stop pulsing after first click
  $('#next-arrow').on('click', function() {
    $('#next-arrow > i').removeClass('pulse')
  })

})
