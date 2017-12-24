$(function() {
  $('#name-input').on('keyup', function() {
    if (this.value.length >= 2) {
      $('#next-arrow').fadeIn(1000)
    } else {
      $('#next-arrow').hide()
    }
  })
})
