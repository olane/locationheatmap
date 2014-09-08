
var locationData = [];

var map, pointarray, heatmap;

var gradient = [
  'rgba(0, 255, 255, 0)',
  'rgba(0, 255, 255, 1)',
  'rgba(0, 191, 255, 1)',
  'rgba(0, 127, 255, 1)',
  'rgba(0, 63, 255, 1)',
  'rgba(0, 0, 255, 1)',
  'rgba(0, 0, 223, 1)',
  'rgba(0, 0, 191, 1)',
  'rgba(0, 0, 159, 1)',
  'rgba(0, 0, 127, 1)',
  'rgba(63, 0, 91, 1)',
  'rgba(127, 0, 63, 1)',
  'rgba(191, 0, 31, 1)',
  'rgba(255, 0, 0, 1)'
]

$.getJSON( "LocationHistory.json", function( data ) {

  for(i = 0; i < data.locations.length; i++){
    locationData.push(
      new google.maps.LatLng(data.locations[i].latitudeE7 / 10000000, data.locations[i].longitudeE7 / 10000000)
    );
  }

  var pointArray = new google.maps.MVCArray(locationData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray,

    // If we don't do this, you get one massive dot above your house and
    // everything else fades to almost invisible. If you're only seeing a
    // bit of data above your most common locations you might want to lower
    // this.
    maxIntensity: 100
  });

  heatmap.setMap(map);

  heatmap.set('gradient', gradient);

  $('#loader').toggle();
});

function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(52, -0.4)
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

google.maps.event.addDomListener(window, 'load', initialize);
