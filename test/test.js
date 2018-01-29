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

describe('Verificar que value es un valor que sólo contiene números', () => {
  it('Debe retornar true si el string contiene sólo valores numéricos', () => {
    assert.equal('100', app.replaceNonNumbers('100'));
    assert.equal('0', app.replaceNonNumbers('0'));
    assert.equal('99', app.replaceNonNumbers('99'));
    assert.equal('30.5', app.replaceNonNumbers('30.5'));
    assert.equal('-50', app.replaceNonNumbers('-50'));
    assert.equal('100%', app.replaceNonNumbers('100%'));
  });

  it('Debe retornar false si el string contiene una letra', () => {
    assert.equal('10', app.replaceNonNumbers('1o0'));
    assert.equal('14', app.replaceNonNumbers('14ñ'));
  })
});