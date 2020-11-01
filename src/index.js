import './index.html';
import './style.css';

console.log('funguju!');

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
