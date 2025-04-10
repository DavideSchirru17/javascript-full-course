'use strict';
console.log('MODAL VIEW');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  console.log('button clicked');
  modal.classList.remove('hidden'); // * you dont need to use . . only > selectors not classes manipulation
  overlay.classList.remove('hidden');
};

console.log(modal);
console.log(overlay);
console.log(btnsOpenModal);

// if there are multiple selectors with the same name only the 1th one is selected
// .querySelectorAll: if you want select all the btns in once

// loop with the list

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
console.log(modal);
console.log(overlay);
//.textContent -  classes

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//! 83 CLICKING KEY KEYBOARDS EVENTS
// ADDEVENT LISTENER  - global event - all the document

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  // which key pressed?
  // call the function qhen the key is pressed
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// click keyboards - escape x
