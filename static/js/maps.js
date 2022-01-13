function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 54.97484762774554,
            lng: -1.619589856337952
        }
    });

    var labels = "A";

    var locations = [
        { lat: 54.97484762774554, lng: -1.619589856337952 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}