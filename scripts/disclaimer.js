document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const totalPages = 2; // Atualize conforme necessário
    const disclaimerPages = document.querySelectorAll('.pagina-disclaimer');
    const prevButton = document.getElementById('botao-esquerda-disclaimer');
    const nextButton = document.getElementById('botao-direita-disclaimer');
    const closeButton = document.querySelector('.botao-fechar-disclaimer');

    function updateButtons() {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages; // Apenas desativar o botão em vez de escondê-lo
    }
    

    function showPage(pageNumber) {
        disclaimerPages.forEach((page, index) => {
            page.classList.toggle('active', index === pageNumber - 1);
        });
        updateButtons();
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    closeButton.addEventListener('click', function() {
        document.getElementById('fundo-disclaimer').style.display = 'none';
        document.body.classList.remove('disclaimer-active');
    });

    // Inicializa a página com a janela de disclaimer ativa
    document.body.classList.add('disclaimer-active');
    showPage(currentPage);
});
