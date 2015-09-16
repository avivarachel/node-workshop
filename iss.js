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

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
   
}

 var prompt = require('prompt');

  prompt.start();

  prompt.get(['location'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Location: ' + result.location);
  });

  function onErr(err) {
    console.log("Error. Try again.");
    return 1;
  }
  
  console.log('  --  user location: ' + result.location);
        issInfo(result.location);
    });
}

function findDistance(usrLoc, issLat, issLon){
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + usrLoc +"", function(error, response, body) {
        if(!error){
            var userLocationInfo = JSON.parse(body);
            var userLat = userLocationInfo.results[0].geometry.location.lat;
            var userLon = userLocationInfo.results[0].geometry.location.lng;
            
        }
        else {
            console.log("Error. Try again.");
        }
       
        
    });
   

   function distanceISS(lat1,lon1,lat2,lon2){
   
    var R = 6371000; // metres
var φ1 = lat1.toRadians();
var φ2 = lat2.toRadians();
var Δφ = (lat2-lat1).toRadians();
var Δλ = (lon2-lon1).toRadians();

var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c;
   }

    console.log("The distance between you and the ISS is: " + Math.round( distanceISS(userLat, userLon, issLat, issLon)/1000 ) + " kilometers")
    
   })