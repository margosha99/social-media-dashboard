const switchInput = document.getElementById("switch-mode");
const cards = document.querySelectorAll('li');
const mainCardsNumber = document.getElementsByClassName('card__number');
const smallCardsNumber = document.getElementsByClassName('card__info-number');
const body = document.getElementById('body');
const headliner = document.getElementById('main-text');


switchInput.addEventListener('click', function(){
    cards.forEach(card => {
        card.classList.toggle('dark-mode-card')
    })
    Array.from(mainCardsNumber).forEach( function(el){
        el.classList.toggle('dark-mode-text')
    })
    Array.from(smallCardsNumber).forEach( function(el){
        el.classList.toggle('dark-mode-text')
    })
    body.classList.toggle('dark-mode-body');
    headliner.classList.toggle('dark-mode-text')
})