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
    } else { callback( null, data["ip"]) }; 
  })
};

const fetchMyCoordsByIP = (ip, callback) => {

};

//fetchMyIp();

module.exports = {
  fetchMyIP,
  fetchMyCoordsByIP,
};