//Controle de visibilidade de camadas no painel
document.addEventListener('DOMContentLoaded', function() {
    const chkBaciaRioParaiba = document.getElementById('checkboxBaciaRioParaiba');
    const chkSubBaciaRioParaiba = document.getElementById('checkboxSubBaciaRioParaiba');
    const chkHidrografiaPrincipal = document.getElementById('checkboxHidrografiaPrincipal');
    
    chkBaciaRioParaiba.addEventListener('change', function() {
        baciaRioParaiba.setVisible(this.checked);
    });
    chkSubBaciaRioParaiba.addEventListener('change', function() {
        subBaciaRioParaiba.setVisible(this.checked);
    });
    chkHidrografiaPrincipal.addEventListener('change', function() {
        hidrografiaPrincipal.setVisible(this.checked);
    });
});


//Carregar camadas do Geoserver no mapa
var url_geoserver = 'https://geoserver.planorioparaiba.com.br/geoserver/prh_rpb/wms';

var baciaRioParaiba = new ol.layer.Tile({
    title: 'Bacia do Rio Paraíba',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:bacia_rpb',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'prh_rpb:bacia_rpb', 'TILED': true},
        serverType: 'geoserver',
    }),
    visible: true,
});

var subBaciaRioParaiba = new ol.layer.Tile({
    title: 'Sub bacias do Rio Paraíba',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:sub_bacias_rpb',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'prh_rpb:sub_bacias_rpb', 'TILED': true},
        serverType: 'geoserver',
    }),
    visible: true,
});

var hidrografiaPrincipal = new ol.layer.Tile({
    title: 'Hidrografia principal',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:hidrografia_principal',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'prh_rpb:hidrografia_principal', 'TILED':true},
        serverType: 'geoserver',
    }),
    visible: true,
})

map.addLayer(subBaciaRioParaiba);
map.addLayer(baciaRioParaiba);
map.addLayer(hidrografiaPrincipal);

// Adicionar LayerSwitcher
const layerSwitcher = new LayerSwitcher({
    reverse: true,
    groupSelectStyle: 'none'
});
map.addControl(layerSwitcher);
