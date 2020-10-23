

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
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    console.log(typeof(locationString));
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
    console.log("What it looks like:", location);
    jQuery.ajax({ 
      url: '/location', 
      type: "POST", 
      contentType: "application/json",
      data: location,
      dataType: "text",
      timeout: 5000,
      success: function() { 
        alert('Location was sent Susscefully!')
      },
      error:function(){
        alert('error saving location')
      }
    });
  }
}



document.getElementById('find-me').addEventListener('click', geoFindMe);