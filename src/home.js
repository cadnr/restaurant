const home = () => {
  const divMiddle = document.createElement('div');
  divMiddle.classList.add('middle-section');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Good Food Restaurant';
  header.append(h1);
  const main = document.createElement('main');
  main.textContent = `Odio aut id veritatis. Voluptas ratione voluptas sint necessitatibus
  assumenda. Amet magnam qui in magni. Sunt modi aliquid aut et. Qui
  officia voluptatem veniam sint ut qui et. Et illo voluptates quis ad
  molestias. Sunt quidem dignissimos deserunt alias optio est nihil.
  Eveniet ea tenetur commodi sit possimus. Beatae voluptas assumenda
  ratione tenetur. Repudiandae aut vitae saepe in ut necessitatibus
  dolor possimus. Nihil perferendis consectetur consectetur repellendus.`;

  divMiddle.append(header, main);

  return divMiddle;
};

export default home;
