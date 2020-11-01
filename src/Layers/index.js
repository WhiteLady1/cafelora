'use strict';
import { Layer } from '../Layer';

export const Layers = (props) => {
  let result = '<div class="drink__layers">';
  for (let i = 0; i < props.length; i++) {
    result += Layer(props[i]);
  }
  result += '</div>';
  return result;
};
