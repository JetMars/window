import postData from '../services/postData';
import inputNumValid from '../modules/inputNumValid';

const forms = (stateForm) => {
  const forms = document.querySelectorAll('form');

  inputNumValid('input[name="user_phone"]');

  const messageData = {
    loading: 'Загрузка',
    success: 'Загрузка завершилась успешно! Спасибо за ожидание!',
    failure: 'Ошибка загрузки'
  };


  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const message = document.createElement('div');
      message.classList.add('status');
      form.append(message);

      message.textContent = messageData.loading;

      const formData = new FormData(form);

      if (e.target.getAttribute('data-end') === 'end') {
        for (let key in stateForm) {
          formData.append(key, stateForm[key]);
        }
      }

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          message.textContent = messageData.success;
        })
        .catch(err => {
          message.textContent = messageData.failure;
        })
        .finally(() => {
          form.reset();
          setTimeout(() => {
            message.remove();
          }, 3000);
        });

    });
  });



};

export default forms;