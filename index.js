const { fetchMyIP } = require('./iss');
const { fetchMyCoordsByIP, fetchOverHead } = require("./iss");

// fetchMyIP ((error, ip) => {
//   if (error) {
//     console.log("It did not work! ", error)
//     return
//   };
//   console.log('It worked! ', ip)
// });

// fetchMyCoordsByIP(('173.180.16.68'), (error, location) => {
// if (error) {
//   console.log("IT did not work! ", error);
//   return;
// }
// console.log("It worked ", location);
// });

fetchOverHead(({ longitude: -122.9317, latitude: 49.2286 }), (error, response) => {
  if (error) {
    console.log("IT did not work! ", error);
    return;
  }
  console.log("It worked ", response);
});