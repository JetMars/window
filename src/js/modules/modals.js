const modals = () => {

  function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.toggle('show');

    const padding = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = padding + 'px';

    if (modalTimerId) {
      clearTimeout(modalTimerId);
    }
  }

  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.toggle('show');

    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }


  function bindModals(triggerSelector, popupSelector, modalTimerId) {

    const trigger = document.querySelectorAll(triggerSelector);
    const popup = document.querySelector(popupSelector);
    const triggerClose = popup.querySelector('.popup_close');

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        openModal(popupSelector, modalTimerId);
      });
    });

    triggerClose.addEventListener('click', (event) => {
      event.preventDefault();
      closeModal(popupSelector);
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closeModal(popupSelector);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && popup.classList.contains('show')) {
        closeModal(popupSelector);
      }
    });
  }

  const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 1000000);

  bindModals('.header_btn', '.popup_engineer', modalTimerId);
  bindModals('.phone_link', '.popup', modalTimerId);
};

export default modals;
