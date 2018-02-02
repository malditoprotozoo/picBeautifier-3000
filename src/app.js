const objFunctions = {
  /**
   * Aplicable sólo a filtros con porcentajes
   */
  verifyFilter: function(filter, value) {
    let arrFilters = ['brightness', 'contrast', 'grayscale', 'invert', 'opacity', 'sepia'];
    var result;
    if (arrFilters.indexOf(filter.toLowerCase()) >= 0 && value >= 0 && value <= 100) {
      return true;
    } else {
      return false;
    }
  },
  replaceNonNumbers: value => {
    let regex = /[a-zA-ZñÑáéíóúÁÉÍÓÚ]/g;
    return value.replace(regex, '');
  },
  addParentheses: str => {
    return '(' + str + ')';
  },
  /* styles for figure or image container */
  stylesForFigure: (selectorName) => {
    $(selectorName).css({'width' : '100%', 'height': 'auto', 'overflow': 'hidden'});
  },
  /*efectos*/
  limitWidthImg: (selectorName, size) => {
    $(selectorName).css({'width': size});
  },
  changeHeightImg: (selectorName, height, avoidDistorsion) => {
    $(selectorName).css({'height': height});
    if (avoidDistorsion === true) {
      $(selectorName).css({'object-fit': 'cover'});
    }
  },
  applyFilteryHover: (selectorName, filter, value) => {
    if (objFunctions.verifyFilter(filter, value) === true) {
      $(selectorName).hover(function() {
        $(this).css({'filter': `${filter}(${value}%)`});
        $(this).css({'-webkit-filter': `${filter}(${value}%)`});
      }, function() {
        $(this).css({'filter': 'none'});
        $(this).css({'-webkit-filter': 'none'});
      });
    }
  },
  applyFilter: (selectorName, filter, value) => {
    if (objFunctions.verifyFilter(filter, value) === true) {
      $(selectorName).css({'filter': filter + `(` + value + `)`});
      $(selectorName).css({'-webkit-filter': filter + `(` + value + `)`});
    }
  },
  removeFilter: (selectorName) => {
    $(selectorName).css({'filter': 'none'});
    $(selectorName).css({'-webkit-filter': 'none'});
  },
  removeFilteryHover: (selectorName, filter, value) => {
    if (objFunctions.verifyFilter(filter, value) === true) {
      objFunctions.applyFilter(selectorName, filter, value);
      $(selectorName).hover(function() {
        objFunctions.removeFilter($(this));
      }, function() {
        objFunctions.applyFilter($(this), filter, value);
      })
    }
  },
  /* efecto zoom */
  largeScale: (selectorName, scale) => {
    $(selectorName).css({'transform' : `scale(${scale})` , '-webkit-transform' : `scale(${scale})`});
  },
  normalScale: (element) => {
    $(element).css({'transform' : 'scale(1)', '-webkit-transform' : 'scale(1)'});
  },
  /* función a llamar */
  hoverLargeScale: (selectorName, scale) => {
    objFunctions.stylesForFigure($(selectorName));
    $(selectorName).hover(function() {
      var img = $(this).children();
      objFunctions.largeScale(img, scale);
    },
    function() {
      var img = $(this).children();
      objFunctions.normalScale(img, '1');
    });
  },
  /* efecto zoom out */
  hoverNormalScale: (selectorName, scale) => {
    objFunctions.stylesForFigure($(selectorName));
    for (let i = 0; i < $(selectorName).length; i++) {
      let img = $(selectorName)[i];
      img = $(img).children()[0];
      objFunctions.largeScale(img, scale);
    }
    $(selectorName).hover(function() {
      var img = $(this).children();
      objFunctions.normalScale(img, '1');
    }, function() {
      var img = $(this).children();
      objFunctions.largeScale(img, scale);
    });
  },
  /* cambiando opacidad */
  normalOpacity: (element) => {
    $(element).css({'opacity': '1', '-webkit-opacity': '1'});
  },
  changingOpacity: (element, value) => {
    $(element).css({'opacity': value, '-webkit-opacity': value});
  },
  /* función a llamar */
  applyOpacity: (selectorName, value) => {
    objFunctions.stylesForFigure($(selectorName));
    $(selectorName).hover(function() {
      let img = $(this).children();
      objFunctions.changingOpacity(img, value);
    }, function() {
      let img = $(this).children();
      objFunctions.normalOpacity(img)
    });
  },
  /* cambiando opacidad color */
  colorForOpacity: (selectorName, color) => {
    $(selectorName).css({'background-color': color});
  },
  /* función a llamar */
  applyColorOpacity: (selectorName, color, value) => {
    objFunctions.stylesForFigure($(selectorName));
    let img = $(selectorName).children();
    objFunctions.normalOpacity(img);
    $(selectorName).hover(function() {
      let img = $(this).children();
      objFunctions.colorForOpacity(selectorName, color);
      objFunctions.changingOpacity(img, value);
    }, function() {
      let img = $(this).children();
      objFunctions.normalOpacity(img);
    });
  },
  /* hover slide */
  marginZero: (element, scale) =>{
    $(element).css({'margin-left':'0', 'transform':`scale(${scale})`, '-webkit-transform': `scale(${scale})`});
  },
  marginAdd: (element, margin, scale) => {
    $(element).css({'margin-left':`${margin}px`, 'transform':`scale(${scale})`, '-webkit-transform': `scale(${scale})`});
  },
  /* función a llamar */
  hoverSlide: (selectorName, scale, margin) => { // recomendado 1.3 scale, margin 30
    objFunctions.stylesForFigure($(selectorName));
    for (var i = 0; i < $(selectorName).length; i++) {
      let img = $(selectorName)[i];
      img = $(img).children()[0];
      objFunctions.marginAdd($(img), margin, scale);
    }
    $(selectorName).hover(function() {
      let img = $(this).children()[0];
      objFunctions.marginZero($(img), scale);
    }, function() {
      let img = $(this).children()[0];
      objFunctions.marginAdd($(img), margin, scale);
    });
  },
  /* cardify */
  cardifyStyles: (element, img, color, text) => {
    if ($(element).children().length > 1) {
      $(element).children()[1].remove();
    }
    let paragraph = `<figcaption style='font-size: 18px;font-weight:400;text-transform: uppercase;text-align:center; color:white; display:block; padding: 0 15px; position:absolute; top:40%; width:100%;'>${text}</figcaption>`;
    let p = $(element).append(paragraph);
    $(element).css({'background-color': color, 'position':'relative'});
    $(img).css({'opacity':'.1'})
  },
  cardifyNoStyles: (element) => {
    let p = $(element).children()[1];
    let img = $(element).children()[0];
    $(p).css({'display':'none'});
    $(img).css({'opacity': '1', '-webkit-opacity': '1'})
  },
  applyCardify: (phaterElement, color) => {
    var img = $(phaterElement).children()[0];
    var text = $(img).attr('alt');
    objFunctions.cardifyStyles(phaterElement, img, color, text);
  },
  /* función a llamar */
  /*instrucciones: el contenedor debe tener la altura que se desea de la imagen*/
  hoverCardify: (selectorName, color) => {
    objFunctions.stylesForFigure($(selectorName));
    $(selectorName).hover(function() {
      objFunctions.applyCardify($(this), color);
    }, function() {
      objFunctions.cardifyNoStyles($(this));
    });
  },
  addOverlay: (container, width, colorBackground, colorText) => {
    objFunctions.limitWidthImg($(container).children(), '100%');
    $(container).css({'position':'relative', 'width': width});
    for (let i = 0; i < container.length; i++) {
      let img = $(container)[i]
      img = $(img).children()[0];
      let text = $(img).attr('alt');
      let overlayStyle = `<div class="overlay-style" style="position:absolute;bottom:100%;left:0;right:0;
      background-color:${colorBackground};overflow:hidden;width:100%;height:0;transition:.5s ease;
      color:${colorText};">
      <p class="text" style="font-weight:600;position:absolute; text-align:center; width:100%; top:40%;text-transform: uppercase;">${text}</p></div>`;
      let containerIndex = $(container)[i];
      $(containerIndex).append(overlayStyle);
    }
    $(container).hover(function() {
      let secondBox = $(this).children()[1];
      $(secondBox).css({'bottom':'0', 'height':'100%'});
    }, function() {
      let secondBox = $(this).children()[1];
      $(secondBox).css({'bottom':'100%', 'height':'0'});
    });
  }
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = objFunctions;
};