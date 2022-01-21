const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json')
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body)['ip']
  return request(`https://api.freegeoip.app/json/${ip}?apikey=0a73bd50-7a5b-11ec-bbc7-f701212dee0c`);
};

const fetchOverhead = (local) => {
  const data = JSON.parse(local);
  const latitude = data.latitude;
  const longitude = data.longitude
  // const location = {
  //   latitude,
  //   longitude
  // }

  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
}




module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchOverhead
}