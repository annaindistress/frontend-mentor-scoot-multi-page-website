'use strict';

const headerToggleElement = document.querySelector('.header__menu-button');
const navigationElement = document.querySelector('.navigation');

class App {
  constructor () {
    headerToggleElement.addEventListener('click', this._toggleMobileMenu.bind(this));
  }

  _toggleMobileMenu() {
    headerToggleElement.classList.toggle('header__menu-button--open');
    navigationElement.classList.toggle('navigation--open');
  }
};

const app = new App();
