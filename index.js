const { fetchMyIP } = require('./iss');
const { fetchMyCoordsByIP } = require("./iss");

// fetchMyIP ((error, ip) => {
//   if (error) {
//     console.log("It did not work! ", error)
//     return
//   };
//   console.log('It worked! ', ip)
// });

// fetchMyCoordsByIP(('173.180.16.68'), (error, location) => {
//   if (error) {
//     console.log("IT did not work! ", error);
//     return;
//   }
//   console.log("It worked ", location);
// });