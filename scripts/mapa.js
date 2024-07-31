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

// Adicionar camada OpenStreetMap
var osm = new ol.layer.Tile({
    source: new ol.source.OSM(),
    opacity: 0.8,
});

// Adicionar camada OpenStreetMap
var satelite = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        attributions: '<a href="https://www.google.com/maps/@-7.5,-38.5,562824m/data=!3m1!1e3?authuser=0&entry=ttu">© Google Maps.</a>'
    }),
    opacity: 1,
});

map.addLayer(satelite);

// Função para troca de basemap
document.addEventListener('DOMContentLoaded', function() {
    const basemapButton = document.getElementById('botao-basemap');
    const basemapList = document.getElementById('lista-basemap');

    basemapButton.addEventListener('click', function() {
        basemapList.style.display = basemapList.style.display === 'none' ? 'block' : 'none';
    });

    basemapList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const selectedBasemap = e.target.getAttribute('data-basemap');
            // Troque o basemap com base no valor selecionado
            console.log('Basemap selecionado:', selectedBasemap);

            if (selectedBasemap === 'satelite') {
                map.getLayers().setAt(0, satelite);
            } else if (selectedBasemap === 'osm') {
                map.getLayers().setAt(0, osm);
            }
            basemapList.style.display = 'none';
        }
    });

    // Fechar a lista ao clicar fora dela
    document.addEventListener('click', function(e) {
        if (!basemapButton.contains(e.target) && !basemapList.contains(e.target)) {
            basemapList.style.display = 'none';
        }
    });
});

// Ajustar a extensão com base na largura da tela
if (window.innerWidth < 500) {
    mapView.fit(transformedSmallScreenExtent, {size: map.getSize()});
} else {
    mapView.fit(transformedExtent, {size: map.getSize()});
}

// Crie o controle de escala
var scaleLineControl = new ol.control.ScaleLine();

// Função para adicionar/remover a barra de escala
function updateScaleLine() {
    var width = window.innerWidth;
    if (width >= 500) {
        if (!map.getControls().getArray().includes(scaleLineControl)) {
            map.addControl(scaleLineControl);
        }
    } else {
        if (map.getControls().getArray().includes(scaleLineControl)) {
            map.removeControl(scaleLineControl);
        }
    }
}

// Verifique o tamanho da tela ao carregar a página
updateScaleLine();

// Verifique o tamanho da tela ao redimensionar a janela
window.addEventListener('resize', updateScaleLine);
