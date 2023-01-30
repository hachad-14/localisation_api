$(document).ready(function() {

    const date = new Date();
    var device = deviceAPI.deviceName;


    locate();
    writeUserData();
    
    function locate() {
      const id = navigator.geolocation.watchPosition(successCallback, errorCallback);
      const successCallback = (position) => {
        alert(position);
      };
      
      const errorCallback = (error) => {
        alert(error);
      };
    };

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
  