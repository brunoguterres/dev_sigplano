var mapView = new ol.View ({
    center: ol.proj.fromLonLat([-36.3, -7.6]),
    zoom: 9,
});

var map = new ol.Map({
    target: 'map',
    view: mapView,
});

var osmTile = new ol.layer.Tile ({
    title: 'Open Street Map',
    visible: true,
    opacity: 0.8,
    type: 'base',
    source: new ol.source.OSM(),
});

map.addLayer(osmTile);