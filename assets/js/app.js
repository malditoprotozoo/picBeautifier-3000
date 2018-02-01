$(document).ready(function() {
  objFunctions.limitWidthImg('img', '100%');
  objFunctions.changeHeightImg('img', 'auto', true);
  objFunctions.hoverLargeScale('section.zoom-in figure', '1.3');
  objFunctions.hoverNormalScale('section.zoom-out figure', '1.4');
  objFunctions.applyOpacity('section.opacity figure','.7');
  objFunctions.applyColorOpacity('section.color-opacity figure', '#7D1935', '.5');
  objFunctions.hoverSlide('section.slide figure', '1.3', '30');
  objFunctions.hoverCardify('section.alt-text figure', '#7D1935')
  $('section').hide();
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
    if ($(this).hasClass('alt-text')) {
      $('section.alt-text').show();
    }
  });
});



/*


  $('.btn-eff').click(function() {
    $('.btn-eff').removeClass('active');
    $(this).addClass('active');
    objFunctions.normalScale($('figure img'));
    objFunctions.marginZero($('figure img'));
    if ($(this).hasClass('zoom-in')) {
      for(var i = 0; i < $('figure').length; i++) {
        console.log($('figure'));
        var figure = $('figure')[i];
        $(figure).removeClass();
        $(figure).addClass('large-scale');
        objFunctions.hoverLargeScale('figure.large-scale', 1.3);
      }
      objFunctions.hoverLargeScale($('figure'), 1.3);
    }
    if ($(this).hasClass('zoom-out')) {
      for (var i = 0; i < $('figure').length; i++) {
        var figure = $('figure')[i];
        $(figure).removeClass();
        $(figure).addClass('normal-scale');
        objFunctions.hoverNormalScale('figure.normal-scale', 1.4);
      }
    }
    if ($(this).hasClass('opacity')) {
      for (var i = 0; i < $('figure').length; i++) {
        var figure = $('figure')[i];
        $(figure).removeClass();
        $(figure).addClass('opacity');
        objFunctions.applyOpacity('.opacity', '.7');
      }
    }
    if ($(this).hasClass('color-opacity')) {
      for (var i = 0; i < $('figure').length; i++) {
        var figure = $('figure')[i];
        $(figure).removeClass();
        $(figure).addClass('color-opacity');
        objFunctions.applyColorOpacity('figure.color-opacity', '#7D1935', '.7');
      }
    }
    if ($(this).hasClass('slide')) {
      for (var i = 0; i < $('figure').length; i++) {
        var figure = $('figure')[i];
        $(figure).removeClass();
        $(figure).addClass('slide');
        objFunctions.applyColorOpacity('figure.slide', '1.3', '30');
      }
    }
  if ($(this).hasClass('alt-text')) {
    for (var i = 0; i < $('figure').length; i++) {
      var figure = $('figure')[i];
      $(figure).removeClass();
      $(figure).addClass('alt-text');
      objFunctions.applyColorOpacity('figure.alt-text', '#7D1935');
    }
  }
  })

*/