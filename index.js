const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

// const myCallBack = function (error, desc) {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// }

// fetchBreedDescription(breedName, myCallBack)


fetchBreedDescription(breedName, function (error, desc) {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

