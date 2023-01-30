$(document).ready(function() {

    const date = new Date();
    var device = deviceAPI.deviceName;

    const successCallback = (position) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = position.coords.latitude +' '+ position.coords.longitude;
        console.log(location);
        firebase.database().ref("api/" + "localisation " + date).set({
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

    function update_location() {
      const updatedLocation_success = (updated_position) => {
        navigator.geolocation.watchPosition((updated_position) => {
          const Updated_location = updated_position.coords.latitude +' '+ updated_position.coords.longitude;
          alert(Updated_location);
          firebase.database().ref("api/" + "Moi " + date).set({
            A_Date: date + "",
            B_Username: device,
            C_Exact_location : Updated_location,
            D_Order:  "100",
          });
        }); 
      };
      const updatedLocation_error = (error) => {
        alert(error);
      };
      navigator.geolocation.watchPosition(updatedLocation_success, updatedLocation_error);
    };
    update_location();
    setInterval(update_location, 10*1000);
});
  