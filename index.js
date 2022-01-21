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

// fetchOverHead(({ longitude: -122.9317, latitude: 49.2286 }), (error, response) => {
//   if (error) {
//     console.log("IT did not work! ", error);
//     return;
//   }
//   console.log("It worked ", response);
// });

const nextISSTimesForMyLocation = () => {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("IP did not work! ", error);
      return;
    }
    fetchMyCoordsByIP((ip), (error, location) => {
      if (error) {
        console.log("Location did not work! ", error);
        return;
      }
      fetchOverHead((location), (error, response) => {
        if (error) {
          console.log("response did not work! ", error);
          return;
        }
        for (let item of response) {
        //console.log(item);
          console.log(`Risetime is ${item['risetime']}, for ${item['duration']} seconds`);
        }
      });
    });
    
  });
};

nextISSTimesForMyLocation();