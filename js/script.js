//Choose a random color
const body = document.querySelector('body');
const button = document.querySelector('button');

const rgbColor = () => {
    let randomRgb = 'rgb(';
        randomRgb +=  Math.floor(Math.random() * 300) + ',';
        randomRgb +=  Math.floor(Math.random() * 300) + ',';
        randomRgb +=  Math.floor(Math.random() * 300);
        randomRgb += ')';
        return body.style.backgroundColor = randomRgb;
}
rgbColor();
button.addEventListener('click', rgbColor);

//Choose a random color 2nd solution
/*const body = document.querySelector('body');
const button = document.querySelector('button')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black', 'darkred'];

const randomColors = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomColor];
}

body.style.backgroundColor = 'Darkred';
button.addEventListener('click', randomColors);*/
