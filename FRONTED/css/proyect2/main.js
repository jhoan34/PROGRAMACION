const menu = document.querySelector('.menu');
let lineTop = document.querySelector('.linea1');
let lineMiddle = document.querySelector('.linea2');
let lineBottom = document.querySelector('.linea3');

menu.addEventListener('click', () => { 
    lineTop.classList.toggle('top');
    lineMiddle.classList.toggle('centro');
    lineBottom.classList.toggle('bottom');
});