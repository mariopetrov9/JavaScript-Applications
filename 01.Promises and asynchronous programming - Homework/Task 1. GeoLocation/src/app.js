// If map doesnt show in Google Chrome, that's because chrome has security restrictions on accessing geolocation data locally. Thus, you need to host the file through a live-server to use the data.
// Works in edge and firefox. 

(function () {
    var getLocation = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            resolve(pos);
        })
    });

    function displayMap(pos) {
        var lat = pos.coords.latitude,
            long = pos.coords.longitude,
            map = document.getElementById('map');

        var mapSrc = 'https://maps.googleapis.com/maps/api/staticmap?center=' +
            lat + ',' + long + '&zoom=18&size=500x500&sensor=false';

        map.src = mapSrc;
    }

    getLocation
        .then(displayMap);
}());