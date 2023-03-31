const largeCup = document.querySelector('.cup');
const remained = document.querySelector('.remained');
const percentage = document.querySelector('.percentage');
const cups = document.querySelectorAll('.cup-small');

const target = 2;
let current = 0;

updateBigCup();

cups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
  if (cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')) {
    index--;
  }

  cups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = cups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    current = (totalCups - fullCups) * 0.25;
    remained.innerText = `${current}L`;
  }
}
