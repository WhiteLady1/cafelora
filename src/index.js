import './index.html';
import './style.css';
import { Layer } from './Layer';

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
console.log(btnOrder.length);

//----------- Ingredience jako komponenta ----------
const pole = {
  color: '#feeeca',
  label: 'mléčná pěna++',
};

const prvniVrstva = document.querySelectorAll('.layer');

//----------- Seznam ingrediencí -----------

const Layers = (props) => {
  let result = '<div class="drink__layers">';
  for (let i = 0; i < props.length; i++) {
    result += Layer(props[i]);
  }
  result += '</div>';
  return result;
};

//--------- Nápoj jako komponenta ----------

const Drink = (props) => {
  const newDrink = document.createElement('div');
  newDrink.className = 'drink';
  newDrink.innerHTML = `
  <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>
                ${Layers(props.layers)}
                
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
  `;
  return newDrink;
};

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

allDrinks(drinks);
//---------- API ----------

fetch('http://cafelora.kodim.cz/api/drinks')
  .then((resp) => resp.json())
  .then((odpoved) => allDrinks(odpoved));
