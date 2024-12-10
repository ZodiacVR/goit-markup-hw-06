
const refs = {
  openMenueBtn: document.querySelector('[data-open-menu]'),
  closeMenueBtn: document.querySelector('[data-close-menu]'),
  menue: document.querySelector('[data-menu]'),
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toogleModal);
refs.closeModalBtn.addEventListener('click', toogleModal);
refs.openMenueBtn.addEventListener('click', toogleMenue);
refs.closeMenueBtn.addEventListener('click', toogleMenue);

function toogleModal() {
  refs.backdrop.classList.toggle('is-open');
}

function toogleMenue() {
  refs.menue.classList.toggle('is-open');
}