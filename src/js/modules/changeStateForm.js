import inputNumValid from '../modules/inputNumValid';


const changeStateForm = (stateForm) => {
  const window = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowCheckbox = document.querySelectorAll('.checkbox');

  inputNumValid('#width');
  inputNumValid('#height');

  function bindStateForm(selector, event, key) {
    selector.forEach((element, i) => {
      element.addEventListener(event, (e) => {
        switch (e.target.nodeName) {
          case 'IMG':
            stateForm[key] = i;
            break;
          case 'INPUT':
            if (element.getAttribute('type') === 'checkbox') {
              stateForm[key] = i ? 'Теплое' : 'Холодное';
              selector.forEach(item => item.checked = false);
              element.checked = true;
            } else {
              stateForm[key] = element.value;
            }
            break;
          case 'SELECT':
            stateForm[key] = element.value;
            break;
        }
        console.log(stateForm);
      });
    });
  }

  bindStateForm(window, 'click', 'balcon');
  bindStateForm(windowWidth, 'input', 'width');
  bindStateForm(windowHeight, 'input', 'height');
  bindStateForm(windowType, 'change', 'type');
  bindStateForm(windowCheckbox, 'change', 'checkbox');

  // console.log(window, windowWidth, windowHeight, windowType, windowCheckbox);

};

export default changeStateForm;