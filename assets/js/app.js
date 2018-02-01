$('section').hide();
$(document).ready(function() {
  objFunctions.limitWidthImg('section img', '100%');
  objFunctions.changeHeightImg('section img', 'auto', true);
  objFunctions.hoverLargeScale('section.zoom-in figure', '1.3');
  objFunctions.hoverNormalScale('section.zoom-out figure', '1.4');
  objFunctions.applyOpacity('section.opacity figure','.7');
  objFunctions.applyColorOpacity('section.color-opacity figure', '#7D1935', '.5');
  objFunctions.hoverSlide('section.slide figure', '1.3', '30');
  objFunctions.hoverCardify('section.alt-text figure', '#7D1935');
  objFunctions.applyFilteryHover('section.bw-filter figure img:not(.severla)', 'grayscale', '100');
  objFunctions.removeFilteryHover('section.bw-filter figure .severla', 'grayscale', '100');
  objFunctions.applyFilteryHover('section.sepia-filter figure img:not(.severla)', 'sepia', '100');
  objFunctions.removeFilteryHover('section.sepia-filter figure .severla', 'sepia', '100');
  objFunctions.addOverlay('section.overlay figure', '100%', '#4A96AD', 'white');
  $('section.zoom-in').show();

  $('.btn-eff').click(function() {
    $('.btn-eff').removeClass('active');
    $(this).addClass('active');
    $('section').hide();
    if ($(this).hasClass('zoom-in')) {
      $('section.zoom-in').show();
    }
    if ($(this).hasClass('zoom-out')) {
      $('section.zoom-out').show();
    }
    if ($(this).hasClass('zoom-in')) {
      $('section.zoom-in').show();
    }
    if ($(this).hasClass('opacity')) {
      $('section.opacity').show();
    }
    if ($(this).hasClass('color-opacity')) {
      $('section.color-opacity').show();
    }
    if ($(this).hasClass('slide')) {
      $('section.slide').show();
    }
    if ($(this).hasClass('bw-filter')) {
      $('section.bw-filter').show();
    }
    if ($(this).hasClass('sepia-filter')) {
      $('section.sepia-filter').show();
    }
    if ($(this).hasClass('alt-text')) {
      $('section.alt-text').show();
    }
    if ($(this).hasClass('overlay')) {
      $('section.overlay').show();
    }
  });
});