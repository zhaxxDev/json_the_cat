const request = require('request');

let rqBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${rqBreed}`, (error, response, body) => {
  console.log('Invalid argument:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was receive

  const data = JSON.parse(body);
  const breed = data[0];

  if (breed) {
    console.log(data);
  } else {
    console.log(`Failed to find breed ${rqBreed}`);
  }

});
