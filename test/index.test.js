var expect = require('chai').expect;

let nearest0Temperature = require('../index3').nearest0Temperature;

describe('Function nearest0Temperature', function() {

  it('Simple data', function() {
    expect(nearest0Temperature('1 -2 -8 4 5')).to.be.eql('1');
  });

  it('Negative numbers', function() {
    expect(nearest0Temperature('-12 -5 -137')).to.be.eql('-5');
  });

  it('Choose right temperature', function() {
    expect(nearest0Temperature('42 -5 12 21 5 24')).to.be.eql('5');
  });

  it('Choose right temperature 2', function() {
    expect(nearest0Temperature('42 5 12 21 -5 24')).to.be.eql('5');
  });

  it('Complex data', function() {
    expect(nearest0Temperature('-5 -4 -2 12 -40 4 2 18 11 5')).to.be.eql('2');
  });

  it.only('No temperature', function() {
    expect(nearest0Temperature('')).to.be.eql('0');
  });

  it('Our test case', function() {
    expect(nearest0Temperature('-5 -4 -2 12 -40 4 3 18 11 5')).to.be.eql('-2');
  });


});