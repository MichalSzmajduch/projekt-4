(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-popup-open]'),
    closeModalBtn: document.querySelector('[data-modal-popup-close]'),
    closeModalBtn: document.querySelectorAll('[data-modal-contact-close]'),
    modal: document.querySelector('[data-modal-popup]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
