$(document).ready(function() {

    const date = new Date();
    var device = deviceAPI.deviceName;

    const successCallback = (position) => {
      document.getElementById("console").innerHTML = (position + "s");
      navigator.geolocation.getCurrentPosition((position) => {
        const location = position.coords.latitude +' '+ position.coords.longitude;
        alert(location);
        firebase.database().ref("api/" + "localisation" + date).set({
          A_Date: date + "",
          B_Username: device,
          C_Exact_localisation : location,
          D_Order:  "1",
        });
      }); 
    };
    const errorCallback = (error) => {
      alert(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
  