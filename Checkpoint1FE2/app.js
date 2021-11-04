
let title = document.querySelector('#nome-imagem')
let desc = document.querySelector('#descricao')
let image = document.querySelector('#url')

btn = document.querySelector('#btnSubmit')

let cardGrid = document.querySelector('#card-grid');

let card = document.createElement('div');

let cardTitle = document.createElement('h2');

let divImg = document.createElement('div');

let img = document.createElement('img');

let cardParagraph = document.createElement('p');

card.setAttribute('class', 'card');

 btn.addEventListener('click', (load) => {
    let title = document.querySelector('#nome-imagem')
    let desc = document.querySelector('#descricao')
    let image = document.querySelector('#url')
    
    btn = document.querySelector('#btnSubmit')
    
    let cardGrid = document.querySelector('#card-grid');
    
    let card = document.createElement('div');
    
    let cardTitle = document.createElement('h2');
    
    let divImg = document.createElement('div');
    
    let img = document.createElement('img');
    
    let cardParagraph = document.createElement('p');
    
    card.setAttribute('class', 'card');
    
    cardGrid.appendChild(card);
    cardTitle.innerText = title.value;
    divImg.appendChild(img);
    img.setAttribute('src',image.value)
    cardParagraph.innerText = desc.value;
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardParagraph);
    load.preventDefault();
});