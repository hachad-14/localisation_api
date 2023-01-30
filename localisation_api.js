$(document).ready(function() {

    const date = new Date();

    var device = deviceAPI.deviceName;
    //var location = navigator.geolocation;
    //const latitude  = position.coords.latitude;
    //const longitude = position.coords.longitude;
    

    writeUserData();

    document.getElementById('upload').onclick = function() {
      writeUserData();
      console.log('uploaded!');
    };

    function get_Order() {
      updateVisitCount();
    
      function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/posts/Order/?amount=-1')
        .then(res => res.json())
        .then(res => {
          console.log(res.value);
          order = res.value;
        })
      }
    }

    function writeUserData() {
      firebase.database().ref("api/" + "localisation").set({
        Date: date + "",
        Username: device,
        Exact_localisation : "55",
        Order:  "1",
      });
    }
});
  