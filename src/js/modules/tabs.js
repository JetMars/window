const tabs = (parentSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);
  const tabParent = document.querySelector(parentSelector);

  function hideTabContents() {
    content.forEach(element => {
      element.style.display = 'none';

    });

    tabs.forEach(element => {
      element.classList.remove(activeClass);
    });
  }

  function showTabContents(i = 0) {
    content[i].style.display = display;
    tabs[i].classList.add(activeClass);
  }

  hideTabContents();
  showTabContents();

  tabParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tabs.forEach((item, i) => {
        if (item === target.parentNode || item === target) {
          hideTabContents();
          showTabContents(i);
        }
      });
    }
  });
};

export default tabs;