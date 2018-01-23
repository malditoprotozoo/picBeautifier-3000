const assert = require('assert');
var app = require('../src/app');
describe('verifyFilter', function() {
  it('debe retornar true si se le entrega un string y un número válido', () => {
    assert.equal(true, app.verifyFilter('greyscale', 80));
    assert.equal(true, app.verifyFilter('greyscale', 100));
  });

  it('debe retornar false si se le entrega un string y/o un número fuera del rango', () => {
    assert.equal(false, app.verifyFilter('potato', 100));
    assert.equal(false, app.verifyFilter('potato', 200));
    assert.equal(false, app.verifyFilter('greyscale', -100));
  });
});