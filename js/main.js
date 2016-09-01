var map;

$(document).ready(function init() {

    map = L.map('map').setView([45.806, 24.988222222222223], 7);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var geojsonLayer = new L.GeoJSON.AJAX("js/sample.geojson",{
        onEachFeature: function(feature, layer) {
            var popupText = "<b>" + feature.properties.name + "</b>"
                + "<br>Adresa: " + feature.properties.address 
                + ", " + feature.properties.city
                + ", Județul " + feature.properties.county;
            layer.bindPopup(popupText); }
        });       
    geojsonLayer.addTo(map);

})