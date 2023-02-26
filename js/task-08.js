const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formValues = event.currentTarget.elements;

  const email = formValues.email.value;
  const password = formValues.password.value;

  const formData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('Всі поля мають бути заповнені!');
  } else {
    console.log(formData);
  }

  form.reset();
};

form.addEventListener('submit', onFormSubmit);
