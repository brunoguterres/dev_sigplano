// Definir a extensão inicial em coordenadas geográficas (longitude e latitude)
var extent = [-36.5, -8.8, -35.7, -6.2];
var smallScreenExtent = [-37.5, -8.5, -34.7, -6.5]; // Extensão para telas menores

// Converter a extensão para a projeção do mapa
var transformedExtent = ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
var transformedSmallScreenExtent = ol.proj.transformExtent(smallScreenExtent, 'EPSG:4326', 'EPSG:3857');

// Criar a visualização do mapa
var mapView = new ol.View({
    projection: 'EPSG:3857'
});

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

// Ajustar a extensão com base na largura da tela
if (window.innerWidth < 500) {
    mapView.fit(transformedSmallScreenExtent, {size: map.getSize()});
} else {
    mapView.fit(transformedExtent, {size: map.getSize()});
}
