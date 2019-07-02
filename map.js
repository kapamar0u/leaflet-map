
var mymap = L.map('mymap').setView([37.9800, 23.7328], 15);

var asty = L.marker([37.9797, 23.7323]).addTo(mymap);
asty.bindPopup('Vasika kalispera sas');

var hello = L.marker([37.9760, 23.7323]).addTo(mymap);
hello.bindPopup('hello');

var idealcine = L.marker([37.98228, 23.73145]).addTo(mymap);
idealcine.bindPopup('kleisame');



var operacine = L.marker([37.9821, 23.73348]).addTo(mymap);
operacine.bindPopup('kanas tsexof paizei?');

var circle = L.circle([37.9800, 23.7320], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.4,
    radius: 1000
}).addTo(mymap);

circle.bindPopup('Too long didnt read!');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };


        var here = L.marker(pos).addTo(mymap);
        here.bindPopup('EDW EIMAI');

    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}

var popup = L.popup();



function onMapClick(e) {
    popup
        .setLatLng(e.lalng)
        .setContent("Pata ston xarti reeeeee" + e.latlng.toString())
        .openOn(mymap);

}

mymap.on('click', onMapClick);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FwYW1hcjB1IiwiYSI6ImNqeGRmMnEzNDA0ejQzem9jZ3c4NW5ha3oifQ.0lEXrcCCbA3JijFHWh0tgg'
}).addTo(mymap);

