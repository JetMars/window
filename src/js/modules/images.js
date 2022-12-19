const images = () => {
  const imagePopup = document.createElement('div');
  const container = document.createElement('div');
  const image = document.createElement('img');
  const wrapper = document.querySelector('.works');

  wrapper.append(imagePopup);
  imagePopup.append(container);
  container.append(image);
  imagePopup.classList.add('popup');

  wrapper.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignItems = 'center';
    imagePopup.style.display = 'none';

    if (target && target.classList.contains('preview')) {

      const href = target.parentNode.getAttribute('href');
      image.setAttribute('src', href);
      imagePopup.style.display = 'flex';

      container.style.cssText = `
        width: 600px;
        height: 600px;
        margin: auto
      `;

      image.style.cssText = `
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      `;

    }
  });
};

export default images;