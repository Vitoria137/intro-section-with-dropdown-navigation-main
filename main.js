//Nav  
const titulo = document.querySelector('#titulo')
const menu = document.querySelector('.subList')

const seta = document.querySelector('#seta')

titulo.addEventListener('click', () => {
    menu.classList.toggle('active')
    seta.classList.toggle('active')
    titulo.classList.toggle('active')
})

const titulo2 = document.querySelector('#titulo2')
const menu2 = document.querySelector('.subList2')

const seta2 = document.querySelector('#seta2')

titulo2.addEventListener('click', () => {
    menu2.classList.toggle('active')
    seta2.classList.toggle('active')
    titulo2.classList.toggle('active')
})

//Hamburguer

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('active')
})
