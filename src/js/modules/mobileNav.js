// Mobile nav
import $ from 'jquery';

const mobileNav = () => {
  let toggle = document.querySelector('.nav-toggle');
  let navigation = document.querySelector('.nav');
  toggle.addEventListener('click', function (e) {
    this.classList.toggle('opened');
    navigation.classList.toggle('opened');
  });
};

export default mobileNav;
