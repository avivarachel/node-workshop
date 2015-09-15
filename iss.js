// 1. output the latitude and longitude of the International Space Station.

var request = require('request');

request('http://api.open-notify.org/iss-now.json', function(error, response, body) {
    
    if(!error){
        var issInfo = JSON.parse(body);
        console.log("The ISS is now at: Latitude: " + Math.round(issInfo.iss_position.latitude * 100)/100 + " Longitude: " + Math.round(issInfo.iss_position.longitude * 100)/100)
    } 
    else {
        console.log("There was an error. We have no idea where the ISS is.");
    }
    
});