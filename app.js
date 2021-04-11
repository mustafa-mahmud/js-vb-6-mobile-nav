'use strict';

const allLiEl = document.querySelectorAll('li');
const allImgEl = document.querySelectorAll('img');

function showActive(index) {
  allLiEl.forEach((li) => li.classList.remove('active'));
  allImgEl.forEach((img) => img.classList.remove('active'));

  allImgEl[index].classList.add('active');
  allLiEl[index].classList.add('active');
}

allLiEl.forEach((li, index) => {
  li.addEventListener('click', () => showActive(index));
});
