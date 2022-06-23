import cardData from './data.js';

const section = document.querySelector('.featured_speakers');
const container = document.createElement('div');
container.classList.add('featured_speakers_container');

const containerH2 = document.createElement('h2');
containerH2.textContent = 'Expositores';
const firstSpan = document.createElement('span');
const featuredSCards = document.createElement('div');
featuredSCards.classList.add('featured_speakers_cards');

for (let i = 0; i < cardData.length; i += 1) {
  const Scard = document.createElement('div');
  Scard.classList.add('featured_speakers_card');
  const img = document.createElement('img');
  img.src = cardData[i].img;
  const div = document.createElement('div');
  div.classList.add('card_text');
  const h1 = document.createElement('h1');
  h1.textContent = cardData[i].nombre;
  const fp = document.createElement('p');
  fp.textContent = cardData[i].cargo;
  const sp = document.createElement('p');
  sp.textContent = cardData[i].description;

  featuredSCards.appendChild(Scard);
  Scard.appendChild(img);
  Scard.appendChild(div);
  div.appendChild(h1);
  div.appendChild(fp);
  div.appendChild(sp);
}

section.appendChild(container);
container.appendChild(containerH2);
container.appendChild(firstSpan);
container.appendChild(featuredSCards);