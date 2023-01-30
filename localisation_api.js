$(document).ready(function() {

    const date = new Date();

    var device = deviceAPI.deviceName;
    //var location = navigator.geolocation;
    //const latitude  = position.coords.latitude;
    //const longitude = position.coords.longitude;


    const successCallback = (position) => {
      document.getElementById("console").innerHTML = (position + "s");
      //console.log(document.getElementById('console').textContent);
      navigator.geolocation.getCurrentPosition((position) => {
        const location = position.coords.latitude +' '+ position.coords.longitude;
        alert(location);
        firebase.database().ref("api/" + "localisation").set({
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
//function writeUserData() {
//  firebase.database().ref("api/" + "localisation").set({
//    Date: date + "",
//    Username: device,
//    Exact_localisation : location,
//    Order:  "1",
//  });
//}
});
  