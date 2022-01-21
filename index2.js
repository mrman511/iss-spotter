const { fetchMyIP, fetchCoordsByIP, fetchOverhead } = require('./issPromised');

fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchOverhead)
.then(results =>  {
  let times = JSON.parse(results)['response']
  for (item of times) {
    console.log(`Risetime is ${item['risetime']}, for ${item['duration']} seconds`);
  }
})
//.then()
