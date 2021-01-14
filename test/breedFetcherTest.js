const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('#fetchBreedDescription', () => {
  it('returns string desc of valid breed via callback', done => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      done();
    });
  });

  it('hanldes invalid breed', done => {
    fetchBreedDescription('ssssssssssssssssssssss', (err, desc) => {
      assert.equal(err, null);
      const errDesc = 'error: breed not found';
      assert.equal(errDesc, desc.trim());
      done();
    });
  });
});