# FloraAero 

## 📸 Um portfólio interativo

Em um mundo cada vez mais digital, a forma como registramos, organizamos e compartilhamos informações também influencia a maneira como percebemos e valorizamos o meio ambiente. Fotografias, em especial, têm um papel poderoso: elas documentam, sensibilizam e contam histórias que palavras nem sempre conseguem expressar.

Protótipo: https://canva.link/g78ardp4podv02o

## 🛠️ Tecnologias Utilizadas

| Categoria        | Tecnologia |
| :--------------- | :--------- |
| **Prototipação** | ![Canva](https://img.shields.io/badge/Canva-Design-ff69b4?style=for-the-badge&logo=canva&logoColor=white) |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-Structure-e34f26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-Style-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Fontes** | ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Great%20Vibes%20%26%20Montserrat-b3115e?style=for-the-badge&logo=googlefonts&logoColor=white) |


## 👨‍💻 Decisões de design relacionadas a IHC

O desenvolvimento da interface do FloraAero foi guiado com base nas diretrizes rígidas da **Interação Humano-Computador (IHC)** e padrões modernos de **Acessibilidade Web** para garantir uma experiência de uso inclusiva, agradável e para todos:

* **Visibilidade e Feedback Psicológico:** Os botões principais utilizam um formato esférico realista. Ao passar o mouse, eles reagem com uma animação de zoom sutil, deixando explícito para o usuário que o elemento é clicável (*affordance*).
* **Prevenção de Erros e Controle do Usuário:** A área de clique de todos os botões redondos foi limitada estritamente ao formato do círculo, impedindo cliques acidentais nos cantos transparentes invisíveis das imagens.
* **Legibilidade e Redução da Carga Cognitiva:** Na tela de detalhes, os blocos de texto receberam um fundo rosa translúcido com efeito de desfoque (*glassmorphism/backdrop-filter*). Isso isola o texto do bombardeio visual da imagem de fundo, aumentando o contraste e reduzindo a fadiga visual.
* **Navegação Semântica por Teclado:** Elementos interativos que realizam ações em tela (como os seletores de imagens e botões do Lightbox) utilizam tags `<button>` nativas em vez de `<a>` ou `<div>` genéricas. Isso garante o foco automático via tecla `Tab` e suporte nativo ao clique por meio das teclas `Espaço` e `Enter`.
* **Gerenciamento Estrito de Foco (Focus Trap/Return):** Ao abrir o Lightbox, o foco do teclado é automaticamente transferido para o primeiro elemento interativo interno (o botão de Fechar). Ao fechar o modal, o foco é devolvido para o botão original que abriu a visualização, evitando que usuários cegos ou que navegam apenas via teclado percam sua posição física na página.
* **Comunicação de Estados (WAI-ARIA):** Modais utilizam os atributos fundamentais `role="dialog"`, `aria-modal="true"` e `aria-hidden` para isolar o leitor de tela dentro do conteúdo do Lightbox. Além disso, o botão de zoom utilizar o atributo `aria-pressed`, anunciando atuomaticamente se a imagem está expandida ou em tamanho normal.
* **Atalhos Globais:** Suporte completo à tecla `Escape` (ESC) para fechar o modal a qualquer momento.

## 🗺️ Instruções de navegação

O site funciona através de uma cadeia de parâmetros URL gerenciados por JavaScript, fazendo com que não haja necessidade de diveros arquivos idênticos:

1. **Tela Inicial (`index.html`):** A tela principal mostra uma contextualização do projeto e mostrar para o usuário as escolhas principais de navegação: a Galeria ou a página Sobre Nós.
2. **Galeria Dinâmica (`galeria.html`):** Exibe as fotos cadastradas de forma paginada em uma grade estruturada. 
    * As setas inferiores mudam de forma dinâmica com base no parâmetro de página na URL (ex: `galeria.html?pagina=2`), renderizando o próximo grupo de 6 fotos sem que ocorra um reload no layout. Links ocultos são mascarados com `tabindex="-1"` e `aria-hidden="true"` para não poluir leitores de tela.
    * O botão *Home* no canto superior esquerdo retorna o usuário à página inicial.
3. **Detalhes da galeria (`detalhe.html`):** Ao selecionar qualquer foto na grade, o usuário é direcionado para a visualização detalhada e técnica daquela imagem baseada em seu ID (ex: `detalhe.html?id=2`).
    * As setas inferiores permitem retroceder (`id-1`) ou avançar (`id+1`). Na última foto a navegação é encerrada, mostrando a página *Sobre Nós*
    * O botão *Voltar* desta tela calcula qual página da grade aquela foto pertencia (ex: Foto ID 8 pertence à página 2) e devolve o usuário exatamente de onde ele saiu.
    * Lightbox Acessível com Superzoom: Clicar na imagem principal faz com que a foto se expanda em tamanho ultra-ampliado no layout, ativando barras de rolagem nativas para a observação detalhada das imagens.
4. **Sobre Nós (`sobre.html`):** Conta toda a história sobre o que motivou a escolha da estética Frutiger Aero para o desenvolvimento visual do projeto, tendo o botão *Home* de retorno à página inicial.
