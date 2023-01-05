'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden'); // Close the window pressing X, basically hiding it
  overlay.classList.add('hidden'); // Close the window pressing outside window
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  // Looping through the modals
  btnOpenModal[i].addEventListener('click', openModal); // Shows the window
}

btnCloseModal.addEventListener('click', closeModal); // In here we don't use () 'calling the function' because otherwise JS
overlay.addEventListener('click', closeModal); // would immediately call it after startup

document.addEventListener('keydown', function (event) {
  console.log(event.key); // If you look here, you can see where the Escape comes from
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if (event.key === 'Escape') {                     It's the same code written out
    //   if (!modal.classList.contains('hidden')) {
    // If the modal does not contain the hidden class then close the modal
    closeModal();
  }
});
