const ballContainer = document.getElementById('ballContainer');
const childrens = ballContainer.children;
const span = document.querySelector('span');
let contador = 0;
const button = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const item = document.getElementById('rgb-color');

for (let index = 0; index < 6; index += 1) {
  const ballDiv = document.createElement('div');
  ballDiv.className = 'ball';
  ballContainer.appendChild(ballDiv);
}

function gameSelector(event) {
  if (event.target.style.backgroundColor === item.innerText) {
    answer.innerText = 'Acertou!';
    answer.style.color = 'rgb(89, 10, 10)';
    contador += 3;
    span.innerText = contador;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    answer.style.color = 'black';
  }
}

ballContainer.addEventListener('click', gameSelector);

window.onload = function sphereColor() {
  for (const index of childrens) {
    index.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
  }
  item.innerText = childrens[Math.floor((Math.random() * childrens.length))].style.backgroundColor;
  answer.innerText = 'Escolha uma cor';
};

button.addEventListener('click', window.onload);