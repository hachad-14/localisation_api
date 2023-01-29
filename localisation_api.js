$(document).ready(function() {

    const ua = navigator.userAgent
    const device = {
      iPhone: /iPhone/.test(ua),
    }
    console.log(device);

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('api/' + "localisation").set({
          order: get_Order,
          username: device,
          exact_localisation : "imageUrl"
        });
    }

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
});
  