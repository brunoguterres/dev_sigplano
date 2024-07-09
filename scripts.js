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

document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botao-item');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const janela = document.getElementById(target);

            // Exibe a janela correspondente ao botão clicado
            if (janela) {
                janela.style.display = 'block';
            }
        });
    });

    // Fecha a janela quando clicar fora dela
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.janela') && !event.target.closest('.botao-item')) {
            const janelas = document.querySelectorAll('.janela');
            janelas.forEach(janela => {
                janela.style.display = 'none';
            });
        }
    });
});

