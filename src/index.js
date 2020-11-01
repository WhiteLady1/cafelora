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

//----------- Ingredience jako komponenta ----------
const pole = {
  color: '#feeeca',
  label: 'mléčná pěna++',
};

const prvniVrstva = document.querySelectorAll('.layer');

//----------- Seznam ingrediencí -----------
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna--',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko+-',
  },
  {
    color: '#613916',
    label: 'espresso++',
  },
];

const Layers = (props) => {
  let result = '<div class="drink__layers">';
  for (let i = 0; i < props.length; i++) {
    result += Layer(props[i]);
  }
  result += '</div>';
  return result;
};

//--------- Nápoj jako komponenta ----------
const romano = {
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
};

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

const prodatDrink = document.querySelector('.drinks-list');
prodatDrink.appendChild(Drink(romano));
