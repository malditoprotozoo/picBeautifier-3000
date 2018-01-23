var assert = require('assert');
var app = require('../src/app');
describe('funcionFiltro', function() {
  it('debe retornar true si se le entrega un string y un número válido', () => {
    assert.equal(true, app.funcionParaFiltrar('greyscale', 80));
    assert.equal(true, app.funcionParaFiltrar('greyscale', 100));
  });

  it('debe retornar false si se le entrega un string y/o un número fuera del rango', () => {
    assert.equal(false, app.funcionParaFiltrar('potato', 100));
    assert.equal(false, app.funcionParaFiltrar('potato', 200));
    assert.equal(false, app.funcionParaFiltrar('greyscale', -100));
  });
})