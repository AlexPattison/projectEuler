import chai from 'chai';
chai.should();

import numberOne from '../problems/1.js';

describe('numberOne', () => {
  it('should return 1', () => {
    numberOne().should.equal(1);
  });
});
