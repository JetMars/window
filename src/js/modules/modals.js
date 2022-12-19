function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.toggle('show');

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.remove('hide');
  modal.classList.toggle('show');


  const padding = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = padding + 'px';

  if (modalTimerId) {
    clearTimeout(modalTimerId);
  }
}

const modals = () => {

  function bindModals(triggerSelector, popupSelector, buttonClose, modalTimerId, closeClickOverlay = true) {

    const trigger = document.querySelectorAll(triggerSelector);
    const popup = document.querySelector(popupSelector);
    const triggerClose = popup.querySelector(buttonClose);
    const modals = document.querySelectorAll('[data-modal]');


    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        modals.forEach(item => {
          item.classList.add('hide');
          item.classList.remove('show');
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        });

        openModal(popupSelector, modalTimerId);
      });
    });


    triggerClose.addEventListener('click', (event) => {
      event.preventDefault();

      modals.forEach(item => {
        item.classList.remove('hide');
      });

      closeModal(popupSelector);
    });


    popup.addEventListener('click', (e) => {
      if (e.target === popup && closeClickOverlay) {

        modals.forEach(item => {
          item.classList.remove('hide');
        });

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

  bindModals('.header_btn', '.popup_engineer', '.popup_close', modalTimerId);
  bindModals('.phone_link', '.popup', '.popup_close', modalTimerId);
  bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close', modalTimerId);
  bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', modalTimerId, false);
  bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', modalTimerId, false);
};

export { modals, closeModal, openModal };
