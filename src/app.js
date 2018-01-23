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
  }
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = objFunctions;
};