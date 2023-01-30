$(document).ready(function() {

    const date = new Date();
    var device = deviceAPI.deviceName;

    const successCallback = (position) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = position.coords.latitude +' '+ position.coords.longitude;
        console.log(location);
        firebase.database().ref("api/" + "localisation" + date).set({
          A_Date: date + "",
          B_Username: device,
          C_Exact_location : location,
          D_Order:  "100",
        });
      }); 
    };
    const errorCallback = (error) => {
      alert(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
  