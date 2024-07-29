document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botao-item');
    const janelas = document.querySelectorAll('.janela');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            // Fechar todas as janelas antes de abrir a nova
            janelas.forEach(janela => {
                janela.style.display = 'none';
            });
            botoes.forEach(b => {
                b.querySelector('.material-symbols-outlined').classList.remove('active');
            });

            const target = this.getAttribute('data-target');
            const janela = document.getElementById(target);

            // Exibe a janela correspondente ao botão clicado
            if (janela) {
                janela.style.display = 'block';
                this.querySelector('.material-symbols-outlined').classList.add('active');
            }
        });
    });

    // Adiciona evento de clique para os botões de fechar
    const botoesFechar = document.querySelectorAll('.botao-fechar');
    botoesFechar.forEach(botaoFechar => {
        botaoFechar.addEventListener('click', function() {
            const janela = this.closest('.janela');
            janela.style.display = 'none';

            // Remover a classe ativa do botão correspondente
            const target = janela.id;
            const botaoCorrespondente = document.querySelector(`.botao-item[data-target="${target}"]`);
            if (botaoCorrespondente) {
                botaoCorrespondente.querySelector('.material-symbols-outlined').classList.remove('active');
            }
        });
    });
});
