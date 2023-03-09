const menu = () => {
  const divMiddle = document.createElement('div');
  divMiddle.classList.add('middle-section');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  header.append(h1);
  const main = document.createElement('main');
  const divMenuElement1 = document.createElement('div');
  divMenuElement1.classList.add('menu-element');
  divMenuElement1.textContent = 'Food 1';
  const divMenuElement2 = document.createElement('div');
  divMenuElement2.classList.add('menu-element');
  divMenuElement2.textContent = 'Food 2';
  const divMenuElement3 = document.createElement('div');
  divMenuElement3.classList.add('menu-element');
  divMenuElement3.textContent = 'Food 3';
  const divMenuElement4 = document.createElement('div');
  divMenuElement4.classList.add('menu-element');
  divMenuElement4.textContent = 'Food 4';

  main.append(
    divMenuElement1,
    divMenuElement2,
    divMenuElement3,
    divMenuElement4
  );
  divMiddle.append(header, main);

  return divMiddle;
};

export default menu;
