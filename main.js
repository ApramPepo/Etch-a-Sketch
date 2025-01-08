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
    grid.innerText = '';
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.width = '512px';
    grid.style.height = '512px';

    const squareSize = `${100 / size}%`;

    for (i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = `0 0 ${squareSize}`;
        square.style.height = squareSize;
        square.style.border = `1px solid rgba(0, 0, 0, 0.1)`;
        square.style.boxSizing = 'border-box';
        square.style.backgroundColor = 'white';

        square.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) {
                e.target.style.backgroundColor = 'black';
            }
        });
        square.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(square);
    }

};

draw();

size.addEventListener('input', () => {
    rangeValue.textContent = size.value;
    draw(parseInt(size.value));
});


btnErase.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

btnRandom.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) {
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
        square.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    });
});


size.addEventListener('input', () => {
    rangeValue.textContent = size.value;
});