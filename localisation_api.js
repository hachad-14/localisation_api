$(document).ready(function() {

    const date = new Date();
    var device = deviceAPI.deviceName;


    const id = navigator.geolocation.watchPosition(successCallback, errorCallback);
    const successCallback = (position) => {
      alert(position);
    };
    
    const errorCallback = (error) => {
      alert(error);
    };


    writeUserData();
  
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
  