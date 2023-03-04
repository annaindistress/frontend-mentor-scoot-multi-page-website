'use strict';

const headerElement = document.querySelector('.header');
const headerToggleElement = document.querySelector('.header__menu-button');
const navigationElement = document.querySelector('.navigation');

class App {
  constructor() {
    headerToggleElement.addEventListener(
      'click',
      this._toggleMobileMenu.bind(this)
    );
  }

  _toggleMobileMenu() {
    headerToggleElement.classList.toggle('header__menu-button--open');
    navigationElement.classList.toggle('navigation--open');
    headerElement.classList.toggle('header--open');
  }
}

const app = new App();
