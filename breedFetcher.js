const request = require('request');

let breed = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, 'error: breed not found');
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};