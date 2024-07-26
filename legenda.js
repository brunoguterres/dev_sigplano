function atualizarLegenda() {
    const legendaConteudo = document.getElementById('legenda-conteudo');
    legendaConteudo.innerHTML = ''; // Limpar conteúdo anterior

    const layers = [
        { layer: divisaEstadual, checkboxId: 'checkboxDivisaEstadual' },
        { layer: municipios, checkboxId: 'checkboxLimitesMunicipais' },
        { layer: sedesMunicipais, checkboxId: 'checkboxSedesMunicipais' },
        { layer: baciaRioParaiba, checkboxId: 'checkboxBaciaRioParaiba' },
        { layer: subBaciaRioParaiba, checkboxId: 'checkboxSubBaciaRioParaiba' },
        { layer: hidrografiaPrincipal, checkboxId: 'checkboxHidrografiaPrincipal' },
        { layer: acudesMonitorados, checkboxId: 'checkboxAcudesMonitorados' },
        { layer: pontosAcudesMonitorados, checkboxId: 'checkboxPontosAcudesMonitorados' },
        { layer: pontosAcudesEstrategicos, checkboxId: 'checkboxPontosAcudesEstrategicos' },
        { layer: ottobacias, checkboxId: 'checkboxOttobacias' },
    ];

    layers.forEach(({ layer, checkboxId }) => {
        if (layer.getVisible()) {
            const layerTitle = document.querySelector(`label[for="${checkboxId}"]`).innerText;
            const legendaUrl = layer.getSource().getLegendUrl();

            const legendItem = document.createElement('div');
            legendItem.classList.add('legenda-item');
            legendItem.innerHTML = `
                <img src="${legendaUrl}" alt="Legenda de ${layerTitle}" class="legenda-icone">
                <span class="legenda-texto">${layerTitle}</span>
            `;
            legendaConteudo.appendChild(legendItem);
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
