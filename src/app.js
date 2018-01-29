const objFunctions = {
  //Aplicable sólo a filtros con porcentajes
  verifyFilter: function(filter, value) {
    let arrFilters = ['brightness', 'contrast', 'greyscale', 'invert', 'opacity', 'sepia'];
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
        $(this).css({'filter': filter + `(` + value + `)`});
        $(this).css({'-webkit-filter': filter + `(` + value + `)`});
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
  /* efecto zoom */
  largeScale: (selectorName, scale) => {
    $(selectorName).css({'transform' : `scale(${scale})` , '-webkit-transform' : `scale(${scale})`});
  },
  normalScale: (element) => {
    $(element).css({'transform' : 'scale(1)', '-webkit-transform' : 'scale(1)'});
  },
  /* función a llamar */
  hoverLargeScale: (selectorName, scale) => {
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
    objFunctions.largeScale(img, scale);
    largeScale(img, scale);
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
    $(selectorName).hover(function() {
      let img = $(selectorName).children();
      objFunctions.changingOpacity(img, value);
    }, function() {
      let img = $(selectorName).children();
      objFunctions.normalOpacity(img)
    });
  },
  /* cambiando opacidad color */
  colorForOpacity: (selectorName, color) => {
    $(selectorName).css({'background-color': color});
  },
  /* función a llamar */
  applyColorOpacity: (selectorName, color, value) => {
    let img = $(selectorName).children();
    objFunctions.normalOpacity(img);
    $(selectorName).hover(function() {
      let img = $(selectorName).children();
      objFunctions.colorForOpacity(selectorName, color);
      objFunctions.changingOpacity(img, value);
    }, function() {
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
    let img = $(selectorName).children()[0];
    objFunctions.marginAdd($(img), margin, scale);
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
    let paragraph = `<figcaption style='text-align:center; color:white; display:block; margin: 20px 15px'>${text}</figcaption>`;
    $(element).append(paragraph);
    $(element).css({'background-color': color, 'position':'relative'});
    $(img).css({'opacity':'.3', 'position':'absolute'})
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
  hoverCardify: (selectorName, color) => {
    $(selectorName).hover(function() {
      objFunctions.applyCardify($(this), color);
    }, function() {
      objFunctions.cardifyNoStyles($(this));
    });
  }
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = objFunctions;
};