import home from './home';
import menu from './menu';

const loadPage = (currentPage) => {
  const content = document.getElementById('content');
  content.textContent = '';
  const nav = document.createElement('nav');
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';

  nav.append(homeButton, menuButton, contactButton);

  let divMiddle;
  switch (currentPage) {
    case 'Home':
      divMiddle = home();
      break;
    case 'Menu':
      divMiddle = menu();
      break;
    case 'Contact':
      divMiddle = contact();
      break;
    default:
      alert("I don't know such values");
  }

  content.append(nav, divMiddle);

  const navButtons = document.querySelectorAll('nav > button');

  Object.values(navButtons).forEach((button) => {
    button.addEventListener('click', (e) => {
      currentPage = e.target.innerText;
      loadPage(currentPage);
    });
  });
};

export default loadPage;
