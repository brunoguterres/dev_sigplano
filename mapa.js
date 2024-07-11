// Definir a extensão em coordenadas geográficas (longitude e latitude)
var extent = [-36.5, -8.5, -35.5, -6.5];

// Converter a extensão para a projeção do mapa
var transformedExtent = ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857');

// Criar a visualização do mapa
var mapView = new ol.View({
    projection: 'EPSG:3857'
})

// Criar o mapa
var map = new ol.Map({
    target: 'map',
    view: mapView,
});

// Adicionar camada OpenStreetMap como base
var osmTile = new ol.layer.Tile({
    source: new ol.source.OSM(),
    opacity: 0.8,
});

map.addLayer(osmTile);

// Ajustar a visualização para a extensão definida
mapView.fit(transformedExtent, {size: map.getSize()});