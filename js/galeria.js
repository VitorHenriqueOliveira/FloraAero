// js/galeria.js

document.addEventListener('DOMContentLoaded', () => {
    // Pega a página atual a partir da interrogação na URL (ex: ?pagina=2)
    const parametros = new URLSearchParams(window.location.search);
    let paginaAtual = parseInt(parametros.get('pagina')) || 1;

    const fotosPorPagina = 6;
    const totalPaginas = Math.ceil(fotosGaleria.length / fotosPorPagina);

    // Calcula quais fotos mostrar nesta página
    const inicio = (paginaAtual - 1) * fotosPorPagina;
    const fim = inicio + fotosPorPagina;
    const fotosDestaPagina = fotosGaleria.slice(inicio, fim);

    const grade = document.getElementById('grade-fotos');
    grade.innerHTML = ''; // Limpa a grade antes de preencher

    // Injeta as imagens no HTML
    fotosDestaPagina.forEach(foto => {
        grade.innerHTML += `
            <a class="moldura" href="detalhe.html?id=${foto.id}">
                <img src="${foto.imagem}" alt="${foto.alt}" />
            </a>
        `;
    });

    // Controla os botões de navegação
    const btnVoltar = document.getElementById('btn-voltar-pagina');
    const btnProxima = document.getElementById('btn-proxima-pagina');

    if (paginaAtual > 1) {
        btnVoltar.href = `galeria.html?pagina=${paginaAtual - 1}`;
    } else {
        btnVoltar.style.visibility = "hidden"; // Esconde a seta se estiver na primeira página
    }

    if (paginaAtual < totalPaginas) {
        btnProxima.href = `galeria.html?pagina=${paginaAtual + 1}`;
    } else {
        btnProxima.style.visibility = "hidden"; // Esconde a seta se estiver na última página
    }
});