$(document).ready(function() {

    const date = new Date();
    var device = deviceAPI.deviceName;


    locate();
    writeUserData();
    
    function locate() {
      navigator.geolocation.getCurrentPosition(position);
      alert(position);
    }
    document.getElementById('upload').onclick = function() {
      writeUserData();
      console.log('uploaded!');
    };

    function writeUserData() {
      firebase.database().ref("api/" + "localisation").set({
        Date: date + "",
        Username: device,
        Exact_localisation : position,
        Order:  "1",
      });
    }
});
  