import './index.html';
import './style.css';
import { Drink } from './Drink';

console.log('funguju!');

//----------- NAVIGACION -------------
const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navClose = document.querySelectorAll('a');
for (let i = 0; i < navClose.length; i++) {
  navClose[i].addEventListener('click', () => {
    const navigace = document.querySelector('nav');
    navigace.classList.toggle('nav-closed');
  });
}

//----------- ORDERING -------------
let ordered = false;
const btnOrder = document.querySelectorAll('.order-btn');
for (let i = 0; i < btnOrder.length; i++) {
  btnOrder[i].addEventListener('click', () => {
    const elementDrinkCup = document.querySelector('.drink__cup');
    if (ordered === false) {
      elementDrinkCup.classList.toggle('.drink__cup--selected');
      btnOrder[i].textContent = 'Zrušit';
      ordered = true;
    } else {
      elementDrinkCup.classList.toggle('.drink__cup--selected');
      btnOrder[i].textContent = 'Objednat';
      ordered = false;
    }
  });
}

//----------- Ingredience jako komponenta ----------

//----------- Seznam ingrediencí -----------

//--------- Nápoj jako komponenta ----------

//---------- Seznam nápojů ----------

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const allDrinks = (drinks) => {
  const drinkList = document.querySelector('.drinks-list');
  drinks.forEach((drink) => {
    drinkList.appendChild(Drink(drink));
  });
};

//---------- API ----------

fetch('http://cafelora.kodim.cz/api/drinks')
  .then((resp) => resp.json())
  .then((odpoved) => allDrinks(odpoved));
