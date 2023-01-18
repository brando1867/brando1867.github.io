"use strict";

// {
//   const yellow = document.getElementById('yellow');
//   const blue = document.getElementById('blue');
//   const red = document.getElementById('red');
//   const body = document.querySelector('body');

//   yellow.addEventListener('click', () => {
//     body.classList.add('yellow');
//     body.classList.remove('blue');
//     body.classList.remove('red');
//   });

//   blue.addEventListener('click', () => {
//     body.classList.add('blue');
//     body.classList.remove('yellow');
//     body.classList.remove('red');
//   });

//   red.addEventListener('click', () => {
//     body.classList.add('red');
//     body.classList.remove('yellow');
//     body.classList.remove('blue');

//   });

// }

{
  const radios = document.querySelectorAll('input');
  const body = document.querySelector('body');

radios.forEach(radio => {
  radio.addEventListener('click', () => {
    body.style.background = radio.dataset.color;
  });
});
}