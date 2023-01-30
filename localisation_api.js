$(document).ready(function() {

    const date = new Date();

    var device = deviceAPI.deviceName;
    //var location = navigator.geolocation;
    //const latitude  = position.coords.latitude;
    //const longitude = position.coords.longitude;


    const successCallback = (position) => {
      alert(position);
    };
    const errorCallback = (error) => {
      alert(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    writeUserData();

    document.getElementById('upload').onclick = function() {
      writeUserData();
      console.log('uploaded!');
    };

    function writeUserData() {
      firebase.database().ref("api/" + "localisation").set({
        Date: date + "",
        Username: device,
        Exact_localisation : "5",
        Order:  "1",
      });
    }
});
  