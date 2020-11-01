'use strict';
import './style.css';
import { Layers } from '../Layers';

export const Drink = (props) => {
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
