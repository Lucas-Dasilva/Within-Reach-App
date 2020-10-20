

function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    var obj = new Object();
    obj.name = "location";
    obj.latitude  = latitude;
    obj.longitude = longitude;
    var locationString= JSON.stringify(obj);
    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    callAjax(locationString);
  }

  function error(err) {
    status.textContent = 'Unable to retrieve your location'();
    console.error(err)
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function callAjax(location){
    jQuery.ajax({ 
         url: '/index', 
         type: 'POST', 
         contentType: 'application/json',
         data: location,
         dataType: 'json',
         timeout: 5000,
         success: function(location) { 
          drawChart(location);
       }
    })
  }
}



document.getElementById('find-me').addEventListener('click', geoFindMe);