    // Variaveis dos botões submit e reset

btnSub = document.querySelector('#btnSubmit');
btnRes = document.querySelector('#btnReset');

    // Selecionando as variaves do HTML pelo ID

let title = document.querySelector('#nome-imagem');
let desc = document.querySelector('#descricao');
let image = document.querySelector('#url');
let cardGrid = document.querySelector('#card-grid');
let box = document.querySelector('#checkbox');

    // Evento do Botão submit, a cada clique criará uma nova div

btnSub.addEventListener('click', (load) => {

    // Criando os elementos que irão compor a página

let card = document.createElement('div');
let cardTitle = document.createElement('h2');
let divImg = document.createElement('div');
let img = document.createElement('img');
let cardParagraph = document.createElement('p');

        // Colocando atributo class do card

card.setAttribute('class', 'card');

    // Pegando o valor do input radio que está marcado e o coloca no array options

    let options = [];

    let choice = document.getElementsByName('position');
    for (var i=0; i<choice.length; i++) {
        if ( choice[i].checked ) {
        options.push(choice[i].value);
            }
        };

        // Adiconando as informações do input nas varíaveis

cardTitle.innerText = title.value + ` - ${options[0]}`;
img.setAttribute('src',image.value);
cardParagraph.innerText = desc.value;

        // Condição caso um dos campos não estejam preenchidos

if(title.value == "" || image.value == "" || desc.value == "" || options[0] == undefined) {
        alert('Faltam campos a ser preenchidos!')
        }

        // Caso todos estejam, colocará todas as informações dos inputs no card
else{

    // Se o checkbox estiver marcado, a cor do texto mudará
    // e irá inserir os cards 

    if(box.checked == true){
        img.style.border = '4px solid orange';
        cardTitle.style.color = 'orange';
        cardParagraph.style.color = 'orange';
        cardGrid.appendChild(card);
        divImg.appendChild(img);
        card.appendChild(divImg);
        card.appendChild(cardTitle);
        card.appendChild(cardParagraph);
    }
    else{
        cardGrid.appendChild(card);
        divImg.appendChild(img);
        card.appendChild(divImg);
        card.appendChild(cardTitle);
        card.appendChild(cardParagraph);
    }
}
        // Não deixar que a página recarregue ao clicar no botão

    load.preventDefault();
});

        // Evento do botão Reset, irá excluir o último card criado

btnRes.addEventListener('click', reset =>{

    let last = document.getElementById('card-grid');

        // Selecionando o último filho da div card-grid, e excluindo

    last.removeChild(last.lastChild);
}
)

