const square = document.querySelector('.square');
const btnGrid = document.querySelector('.btnGrid');
const btnErase = document.querySelector('.btnErase');
const btnRandom = document.querySelector('.btnRandom');
const size = document.querySelector('.size');
const rangeValue = document.querySelector('.rangeValue');
let x = 0;
let y = 0;

// Make a grid that draw a 16*16 grid upon the page load.

function draw(size = 16) {
    const grid = document.getElementById('grid');
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.width = '512px';
    grid.style.height = '512px';


}

size.addEventListener('input', () => {
    rangeValue.textContent = size.value;
});