function atualizarLegenda() {
    const legendaItens = document.querySelectorAll('.legenda-item');
    legendaItens.forEach(item => {
        const layerName = item.getAttribute('data-layer');
        const layer = window[layerName]; // Acessa a camada pelo nome da variável global

        if (layer.getVisible()) {
            const legendaUrl = layer.getSource().getLegendUrl();
            const imgElement = item.querySelector('.legenda-icone');
            imgElement.src = legendaUrl;
            item.style.display = 'flex'; // Exibe o item da legenda
        } else {
            item.style.display = 'none'; // Oculta o item da legenda
        }
    });
}

// Atualizar a legenda inicialmente
document.addEventListener('DOMContentLoaded', atualizarLegenda);

// Função para configurar eventos de mudança de visibilidade das camadas
function configurarEventosVisibilidadeCamadas() {
    const layers = [
        divisaEstadual,
        municipios,
        sedesMunicipais,
        baciaRioParaiba,
        subBaciaRioParaiba,
        hidrografiaPrincipal,
        acudesMonitorados,
        pontosAcudesMonitorados,
        pontosAcudesEstrategicos,
        ottobacias,
    ];

    layers.forEach(layer => {
        layer.on('change:visible', atualizarLegenda);
    });
}

// Configurar eventos de mudança de visibilidade das camadas
configurarEventosVisibilidadeCamadas();
