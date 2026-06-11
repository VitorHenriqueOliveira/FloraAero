document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    let paginaAtual = parseInt(parametros.get('pagina')) || 1;

    const fotosPorPagina = 6;
    const totalPaginas = Math.ceil(fotosGaleria.length / fotosPorPagina);

    const inicio = (paginaAtual - 1) * fotosPorPagina;
    const fim = inicio + fotosPorPagina;
    const fotosDestaPagina = fotosGaleria.slice(inicio, fim);

    const grade = document.getElementById('grade-fotos');
    grade.innerHTML = '';

    fotosDestaPagina.forEach(foto => {
        grade.innerHTML += `
            <a class="moldura" href="detalhe.html?id=${foto.id}" aria-label="Ver detalhes de: ${foto.titulo}">
                <img src="${foto.imagem}" alt="${foto.alt}" />
            </a>
        `;
    });

    const btnVoltar = document.getElementById('btn-voltar-pagina');
    const btnProxima = document.getElementById('btn-proxima-pagina');

    if (paginaAtual > 1) {
        btnVoltar.href = `galeria.html?pagina=${paginaAtual - 1}`;
        btnVoltar.style.visibility = "visible";
        btnVoltar.removeAttribute('aria-hidden');
        btnVoltar.removeAttribute('tabindex');
    } else {
        btnVoltar.style.visibility = "hidden";
        btnVoltar.setAttribute('aria-hidden', 'true');
        btnVoltar.setAttribute('tabindex', '-1');
    }

    if (paginaAtual < totalPaginas) {
        btnProxima.href = `galeria.html?pagina=${paginaAtual + 1}`;
        btnProxima.style.visibility = "visible";
        btnProxima.removeAttribute('aria-hidden');
        btnProxima.removeAttribute('tabindex');
    } else {
        btnProxima.style.visibility = "hidden";
        btnProxima.setAttribute('aria-hidden', 'true');
        btnProxima.setAttribute('tabindex', '-1');
    }
});