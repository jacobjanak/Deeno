$(function() {
  
  // Arrow functionality
  const pages = [
    $('#landing-page-container'),
    $('#name-page-container')
  ];
  let currentPage = 0;

  $('#next-arrow').on('click', function() {
    const current = pages[currentPage];
    const next = pages[currentPage + 1];
    const windowWidth = $(window).width();

    // send current in motion and then hide it
    $(current).animate({
      left: -windowWidth,
      right: windowWidth,
    }, windowWidth * 2, function() {
      $(current).hide()

      // restore balance to the arrows
      if (current === pages[0]) {
        $('#prev-arrow').fadeIn(1000)
      }
      if (next === pages[pages.length - 1]) {
        $('#next-arrow').fadeOut(1000)
      }
    })

    // prepare next to be sent in motion
    $(next).css({
      display: 'block',
      left: windowWidth,
      right: -windowWidth,
    })

    // send next in motion
    $(next).animate({
      left: 0,
      right: 0,
    }, windowWidth * 2)

    currentPage++;
  })

  $('#prev-arrow').on('click', function() {
    const current = pages[currentPage];
    const prev = pages[currentPage - 1];
    const windowWidth = $(window).width();

    $(current).animate({
      left: windowWidth,
      right: -windowWidth,
    }, windowWidth * 2, function() {
      $(current).hide()

      // restore balance to the arrows
      if (current === pages[pages.length - 1]) {
        $('#next-arrow').fadeIn(1000)
      }
      if (prev === pages[0]) {
        $('#prev-arrow').fadeOut(1000)
      }
    })

    // prepare prev to be sent in motion
    $(prev).css({
      display: 'block',
      left: -windowWidth,
      right: windowWidth,
    })

    // send next in motion
    $(prev).animate({
      left: 0,
      right: 0,
    }, windowWidth * 2)

    currentPage--;
  })
})
