$(document).ready(function() {


    var order;
    const date = new Date();

    var device = deviceAPI.deviceName;
    
    console.log(device);

    document.getElementById('upload').onclick = function() {
        writeUserData();
        console.log('uploaded!')
    };

    function get_Order() {
      updateVisitCount();
    
      function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/posts/Order/?amount=-1')
        .then(res => res.json())
        .then(res => {
          console.log(res.value);
          order = res.value;
        })
      }
    }

    function writeUserData() {
      firebase.database().ref("api" + "localisation").set({
        Date: date + "",
        username: device,
        exact_localisation : "imageddUrl"
      });
  }
});
  