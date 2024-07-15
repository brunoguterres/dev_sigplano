//Controle de visibilidade de camadas no painel
document.addEventListener('DOMContentLoaded', function() {
    const layers = {
        'checkboxBaciaRioParaiba': baciaRioParaiba,
        'checkboxSubBaciaRioParaiba': subBaciaRioParaiba,
        'checkboxHidrografiaPrincipal': hidrografiaPrincipal,
        'checkboxAcudes': acudes,
        'checkboxAcudesMonitorados': acudesMonitorados,
        'checkboxPontosAcudesMonitorados': pontosAcudesMonitorados,
        'checkboxPontosAcudesEstrategicos': pontosAcudesEstrategicos,
    };

    // Inicializar o estado das checkboxes com base na visibilidade das camadas
    for (const [checkboxId, layer] of Object.entries(layers)) {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            checkbox.checked = layer.getVisible();
            checkbox.addEventListener('change', function() {
                layer.setVisible(this.checked);
            });
        }
    }
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

var acudes = new ol.layer.Tile({
    title: 'Açudes',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:acudes_rpb',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'prh_rpb:acudes_rpb', 'TILED':true},
        serverType: 'geoserver',
    }),
    visible: true,
})

var acudesMonitorados = new ol.layer.Tile({
    title: 'Açudes Monitorados',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:acudes_monitorados_rpb',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'prh_rpb:acudes_monitorados_rpb', 'TILED':true},
        serverType: 'geoserver',
    }),
    visible: true,
})

var pontosAcudesMonitorados = new ol.layer.Tile({
    title: 'Pontos Açudes Monitorados',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:loc_acudes_monitorados_rpb',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'loc_acudes_monitorados_rpb', 'TILED':true},
        serverType: 'geoserver',
    }),
    visible: false,
})

var pontosAcudesEstrategicos = new ol.layer.Tile({
    title: 'Pontos Açudes Estratégicos',
    legendUrl: url_geoserver+'?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=prh_rpb:loc_acudes_estrategicos_rpb',
    source: new ol.source.TileWMS({
        url: url_geoserver,
        params: {'LAYERS':'loc_acudes_estrategicos_rpb', 'TILED':true},
        serverType: 'geoserver',
    }),
    visible: false,
})

map.addLayer(subBaciaRioParaiba);
map.addLayer(baciaRioParaiba);
map.addLayer(acudesMonitorados);
map.addLayer(acudes);
map.addLayer(hidrografiaPrincipal);
map.addLayer(pontosAcudesMonitorados);
map.addLayer(pontosAcudesEstrategicos);

// Adicionar LayerSwitcher
const layerSwitcher = new LayerSwitcher({
    reverse: true,
    groupSelectStyle: 'none'
});
map.addControl(layerSwitcher);
