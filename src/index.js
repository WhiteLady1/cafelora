import './index.html';
import './style.css';

console.log('funguju!');

//----------- NAVIGACION -------------
const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navClose = document.querySelectorAll('a');
console.log(navClose);
for (let i = 0; i < navClose.length; i++) {
  navClose[i].addEventListener('click', () => {
    const navigace = document.querySelector('nav');
    navigace.classList.toggle('nav-closed');
  });
}

//----------- ORDERING -------------
let ordered = false;
const btnOrder = document.querySelector('.order-btn');
btnOrder.addEventListener('click', () => {
  const elementDrinkCup = document.querySelector('.drink__cup');
  if (ordered === false) {
    elementDrinkCup.classList.toggle('.drink__cup--selected');
    btnOrder.textContent = 'Zrušit';
    ordered = true;
  } else {
    elementDrinkCup.classList.toggle('.drink__cup--selected');
    btnOrder.textContent = 'Objednat';
    ordered = false;
  }
});
