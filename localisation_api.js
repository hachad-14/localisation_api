$(document).ready(function() {

    const date = new Date();

    var device = deviceAPI.deviceName;

    function locate() {
      const successCallback = (position) => {
        document.getElementById("console").innerHTML(position);
      };

      const errorCallback = (error) => {
        document.getElementById("console").innerHTML(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }

    writeUserData();

    document.getElementById('upload').onclick = function() {
      locate();
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
  