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
  }
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = objFunctions;
};