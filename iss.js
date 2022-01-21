const request = require('request');

const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    let data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      callback(null, data["ip"]);
    }
  });
};

const fetchMyCoordsByIP = (ip, callback) => {
  const IPtracking = `https://api.freegeoip.app/json/${ip}?apikey=0a73bd50-7a5b-11ec-bbc7-f701212dee0c`;
  request(IPtracking, (error, response, body) => {
    //console.log(body)
    let data = JSON.parse(body);
    const longitude = data['longitude'];
    const latitude = data['latitude'];
    const location = {
      longitude,
      latitude
    };
    if (error) {
      callback(error, null);
    }
    if (response.statusCode === 404) {
      const msg = `Status Code ${response.statusCode} when fetching Location. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      callback(null, location);
    }
  });
};

//fetchMyIp();
//fetchMyCoordsByIP('173.180.16.68')

module.exports = {
  fetchMyIP,
  fetchMyCoordsByIP,
};