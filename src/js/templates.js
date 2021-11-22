import itemsTemplate from '../templates/galery-item.hbs';
import menuItems from '../menu.json';

console.log(menuItems);
console.log(itemsTemplate);
const marcup = itemsTemplate(menuItems);

const galeryMenu = document.querySelector('.js-menu');
galeryMenu.insertAdjacentHTML('beforeend', marcup);
