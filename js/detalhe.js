// js/detalhe.js

document.addEventListener('DOMContentLoaded', () => {
    // Pega o ID da foto a partir da interrogação na URL (ex: ?id=2)
    const parametros = new URLSearchParams(window.location.search);
    const idAtual = parseInt(parametros.get('id')) || 1;

    // Busca a foto correspondente no banco de dados
    const foto = fotosGaleria.find(f => f.id === idAtual);

    if (foto) {
        // Preenche os dados na tela
        document.getElementById('titulo-foto').innerHTML = foto.titulo;
        document.getElementById('desc1').innerHTML = foto.descricao1;
        document.getElementById('desc2').innerHTML = foto.descricao2;
        document.getElementById('credito-foto').innerHTML = foto.credito;

        // Atualiza a imagem e o texto alternativo
        document.getElementById('imagem-destaque').src = foto.imagem;
        document.getElementById('imagem-destaque').alt = foto.alt;

        const btnAnterior = document.getElementById('btn-foto-anterior');
        const btnProxima = document.getElementById('btn-foto-proxima');
        const btnVoltarGaleria = document.getElementById('btn-voltar-galeria');

        // Calcula em qual página da galeria essa foto estava
        const paginaDaFoto = Math.ceil(idAtual / 6);
        btnVoltarGaleria.href = `galeria.html?pagina=${paginaDaFoto}`;

        // Lógica de Seta Anterior
        if (idAtual > 1) {
            btnAnterior.href = `detalhe.html?id=${idAtual - 1}`;
        } else {
            btnAnterior.style.visibility = "hidden"; // Esconde na foto 1
        }

        // Lógica de Seta Próxima
        if (idAtual < fotosGaleria.length) {
            btnProxima.href = `detalhe.html?id=${idAtual + 1}`;
        } else {
            btnProxima.href = "sobre.html"; // Vai pra página Sobre na última foto
        }
    } else {
        // Mensagem de erro caso o ID não exista
        document.getElementById('titulo-foto').innerHTML = "Foto não encontrada!";
        document.querySelector('.detalhe-foto').style.display = 'none';
    }
});