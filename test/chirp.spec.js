var chai = require('chai');
var expect = chai.expect;
chai.should();

var chirp = require('../public/app.js');

describe('chirp function', function () {
  it('should be a function', function() {
    expect(chirp).to.be.a('function');
  });
});