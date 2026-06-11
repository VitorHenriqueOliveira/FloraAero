document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    const idAtual = parseInt(parametros.get('id')) || 1;

    const foto = fotosGaleria.find(f => f.id === idAtual);

    if (foto) {
        document.getElementById('titulo-foto').innerHTML = foto.titulo;
        document.getElementById('desc1').innerHTML = foto.descricao1;
        document.getElementById('desc2').innerHTML = foto.descricao2;
        document.getElementById('credito-foto').innerHTML = foto.credito;

        const imgDestaque = document.getElementById('imagem-destaque');
        imgDestaque.src = foto.imagem;
        imgDestaque.alt = foto.alt;

        const btnAnterior = document.getElementById('btn-foto-anterior');
        const btnProxima = document.getElementById('btn-foto-proxima');
        const btnVoltarGaleria = document.getElementById('btn-voltar-galeria');
        const btnAbrirLightbox = document.getElementById('btn-abrir-lightbox');

        btnAbrirLightbox.setAttribute('aria-label', `Ampliar foto de: ${foto.titulo}`);

        const paginaDaFoto = Math.ceil(idAtual / 6);
        btnVoltarGaleria.href = `galeria.html?pagina=${paginaDaFoto}`;

        if (idAtual > 1) {
            btnAnterior.href = `detalhe.html?id=${idAtual - 1}`;
        } else {
            btnAnterior.style.visibility = "hidden";
            btnAnterior.setAttribute('aria-hidden', 'true');
            btnAnterior.setAttribute('tabindex', '-1');
        }

        if (idAtual < fotosGaleria.length) {
            btnProxima.href = `detalhe.html?id=${idAtual + 1}`;
        } else {
            btnProxima.href = "sobre.html";
            btnProxima.setAttribute('aria-label', 'Ir para a página Sobre');
        }

        const lightbox = document.getElementById('lightbox');
        const btnFecharLightbox = document.getElementById('btn-fechar-lightbox');
        const imgAmpliada = document.getElementById('imagem-ampliada');
        const btnZoomLightbox = document.getElementById('btn-zoom-lightbox');

        function abrirLightbox() {
            imgAmpliada.src = foto.imagem;
            imgAmpliada.alt = foto.alt;

            lightbox.setAttribute('aria-hidden', 'false');
            lightbox.classList.add('visivel');

            document.body.style.overflow = 'hidden';

            btnFecharLightbox.focus();
        }

        function fecharLightbox() {
            lightbox.setAttribute('aria-hidden', 'true');
            lightbox.classList.remove('visivel');

            document.body.style.overflow = '';

            btnZoomLightbox.classList.remove('com-zoom');
            btnZoomLightbox.setAttribute('aria-pressed', 'false');
            btnZoomLightbox.setAttribute('aria-label', "Dar zoom nos detalhes da imagem");

            btnAbrirLightbox.focus();
        }

        function alternarZoom() {
            const temZoom = btnZoomLightbox.classList.toggle('com-zoom');

            btnZoomLightbox.setAttribute('aria-pressed', temZoom);
            btnZoomLightbox.setAttribute(
                'aria-label',
                temZoom ? "Reduzir zoom da imagem para o tamanho normal" : "Dar zoom nos detalhes da imagem"
            );
        }

        btnAbrirLightbox.addEventListener('click', abrirLightbox);
        btnFecharLightbox.addEventListener('click', fecharLightbox);
        btnZoomLightbox.addEventListener('click', alternarZoom);

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
                fecharLightbox();
            }
        });

    } else {
        document.getElementById('titulo-foto').innerHTML = "Foto não encontrada!";
        document.querySelector('.detalhe-foto').style.display = 'none';
    }
});