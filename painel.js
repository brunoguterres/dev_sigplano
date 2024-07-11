document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botao-item');
    const janelas = document.querySelectorAll('.janela');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            // Fechar todas as janelas antes de abrir a nova
            janelas.forEach(janela => {
                janela.style.display = 'none';
            });

            const target = this.getAttribute('data-target');
            const janela = document.getElementById(target);

            // Exibe a janela correspondente ao botão clicado
            if (janela) {
                janela.style.display = 'block';
            }
        });
    });

    // Adiciona evento de clique para os botões de fechar
    const botoesFechar = document.querySelectorAll('.botao-fechar');
    botoesFechar.forEach(botaoFechar => {
        botaoFechar.addEventListener('click', function() {
            const janela = this.closest('.janela');
            janela.style.display = 'none';
        });
    });
});

