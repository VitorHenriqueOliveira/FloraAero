# FloraAero 

## 📸 Um portfólio interativo

Em um mundo cada vez mais digital, a forma como registramos, organizamos e compartilhamos informações também influencia a maneira como percebemos e valorizamos o meio ambiente. Fotografias, em especial, têm um papel poderoso: elas documentam, sensibilizam e contam histórias que palavras nem sempre conseguem expressar.

Protótipo: https://canva.link/g78ardp4podv02o

## 🛠️ Tecnologias Utilizadas

| Categoria        | Tecnologia |
| :--------------- | :--------- |
| **Prototipação** | ![Canva](https://img.shields.io/badge/Canva-Design-ff69b4?style=for-the-badge&logo=canva&logoColor=white) |
| **Frontend**     | ![HTML5](https://img.shields.io/badge/HTML5-Structure-e34f26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-Style-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Fontes**       | ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Great%20Vibes%20%26%20Montserrat-b3115e?style=for-the-badge&logo=googlefonts&logoColor=white) |


## 👨‍💻 Decisões de design relacionadas a IHC

desenvolvimento da interface do FloraAero foi pautado em diretrizes de **Interação Humano-Computador (IHC)** para garantir uma experiência de uso agradável, intuitiva e acessível:

* **Visibilidade e Feedback Psicológico:** Os botões principais utilizam um formato esférico realista. Ao passar o mouse, eles reagem com uma animação de zoom sutil, deixando explícito para o usuário que o elemento é clicável (*affordance*).
* **Prevenção de Erros e Controle do Usuário:** A área de clique de todos os botões redondos foi limitada estritamente ao formato do círculo. Isso impede cliques acidentais nos cantos transparentes invisíveis das imagens.
* **Legibilidade e Redução da Carga Cognitiva:** Na tela de detalhes, os blocos de texto receberam um fundo rosa translúcido com efeito de desfoque (*glassmorphism/backdrop-filter*). Isso isola o texto do bombardeio visual da imagem de fundo, aumentando o contraste e reduzindo a fadiga visual.
* **Acessibilidade Universal:** É injetado via JavaScript textos alternativos (`alt`) descritivos e exclusivos para cada uma das 20 imagens do banco de dados, permitindo uma navegação melhorada para usuários que dependem de leitores de tela.

## 🗺️ Instruções de navegação

O site funciona através de uma cadeia de parâmetros URL gerenciados por JavaScript, fazendo com que não haja necessidade a existência de diversos arquivos iguais:

1.  **Tela Inicial (`index.html`):** A principal tela mostra uma descrição do projeto e mostra ao usuário as escolhas principais: a Galeria ou a página Sobre Nós.
2.  **Galeria Dinâmica (`galeria.html`):** Exibe as fotos cadastradas em uma grade 3x2, com 6 fotos por página. 
    * As setas inferiores mudam de acordo ocm a página atual da URL (ex: `galeria.html?pagina=2`), renderizando o próximo grupo de fotos sem recarregar o layout.
    * O botão *Home* no canto superior esquerdo limpa o estado e retorna ao início.
3.  **Detalhes da galeria (`detalhe.html`):** Ao clicar em qualquer foto da grade, o usuário é enviado para a tela de descrição daquela imagem baseada no ID (ex: `detalhe.html?id=2`).
    * As setas inferiores avançam para o próximo ID (`id+1`) ou voltam para o anterior (`id-1`). Na última foto a navegação é encerrada, mostrando a página *Sobre Nós*.
    * O botão *Voltar* desta tela calcula qual página da grade aquela foto pertencia (ex: Foto ID 8 pertence à página 2) e devolve o usuário exatamente de onde ele saiu.
4.  **Sobre Nós (`sobre.html`):** Todos os passos do surgimento da ideia de utilizar o estilo FrutiherAero são mostrados nessa tela, com a botão *Home* no canto superior esquerdo mostrando para o usuário como voltar.