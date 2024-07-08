// Definir a visualização inicial do mapa
var mapView = new ol.View({
    center: ol.proj.fromLonLat([-37, -7.6]),
    zoom: 8,
});

// Criar o mapa
var map = new ol.Map({
    target: 'map',
    view: mapView,
});

// Adicionar camada OpenStreetMap como base
var osmTile = new ol.layer.Tile({
    source: new ol.source.OSM(),
});

map.addLayer(osmTile);
