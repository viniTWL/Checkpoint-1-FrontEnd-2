btn = document.querySelector('#btnSubmit');

    // Selecionando as variaves do HTML pelo ID

let title = document.querySelector('#nome-imagem');
let desc = document.querySelector('#descricao');
let image = document.querySelector('#url');
let cardGrid = document.querySelector('#card-grid');

    // Evento do Botão, a cada clique criará uma nova div
btn.addEventListener('click', (load) => {
        
        // Criando os elementos que irão compor a página

let card = document.createElement('div');
let cardTitle = document.createElement('h2');
let divImg = document.createElement('div');
let img = document.createElement('img');
let cardParagraph = document.createElement('p');

        // Pegando o valor do input radio que está marcado

let options = [];

let choice = document.getElementsByName('position');
for (var i=0;i<choice.length;i++) {
    if ( choice[i].checked ) {
    options.push(choice[i].value);
        }
    };

        // Colocando a classe card na Div Card

card.setAttribute('class', 'card');

        // Adiconando as informações do input nas varíaveis

cardTitle.innerText = title.value + ` - ${options[0]}`;
img.setAttribute('src',image.value);
cardParagraph.innerText = desc.value;

        // Condição caso um dos campos não estejam preenchidos

if(title.value == "" || image.value == "" || desc.value == ""){
        alert('Faltam campos a ser preenchidos!')
        }
else{
        cardGrid.appendChild(card);
        divImg.appendChild(img);
        card.appendChild(divImg);
        card.appendChild(cardTitle);
        card.appendChild(cardParagraph);
    }

        // Não deixar que a página recarregue ao clicar no botão

    load.preventDefault();
});