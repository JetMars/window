import postData from '../services/postData';

const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputsPhone = document.querySelectorAll('input[name="user_phone"]');

  inputsPhone.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '');
    });
  });

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
          setTimeout(() => message.remove(), 5000);
        });

    });
  });



};

export default forms;