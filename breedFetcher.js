const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
      return;
    }
    const data = JSON.parse(body);
    const breedObj = data[0];

    if (breedObj) {
      callback(null, breedObj.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }

  });

};

module.exports = { fetchBreedDescription };