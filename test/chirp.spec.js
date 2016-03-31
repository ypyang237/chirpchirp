var chai = require('chai');
var expect = chai.expect;
chai.should();

var chirp = require('../public/app.js');

describe('chirp function', function () {
  it('should be a function', function() {
    expect(chirp).to.be.a('function');
  });

  it('should return a string with the word chirp', function() {
    expect(chirp(1)).to.be.equal('chirp');
  });

  it('should return the string chirp the number of times based on the number passed in', function() {
    expect(chirp(3)).to.be.equal("chirp chirp chirp");
  });
});
