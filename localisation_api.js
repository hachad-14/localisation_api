$(document).ready(function() {

    const date = new Date();
    var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();
    var device = deviceAPI.deviceName;

    const successCallback = (position) => {
      document.getElementById("console").innerHTML = (position + "s");
      navigator.geolocation.getCurrentPosition((position) => {
        const location = position.coords.latitude +' '+ position.coords.longitude;
        alert(location);
        firebase.database().ref("api/" + "localisation"+datetime).set({
          Date: date + "",
          Username: device,
          Exact_localisation : location,
          Order:  "1",
        });
      }); 
    };
    const errorCallback = (error) => {
      alert(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
  