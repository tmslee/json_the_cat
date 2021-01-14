const request = require('request');

let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('error: breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});