const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', event => {
  event.preventDefault()

  const {
    elements: { email, password },
  } = event.currentTarget

  if (email.value === '' || password === '') {
    alert('Все поля должны быть заполнены')
  } else {
    const userInfo = {
      [email.name]: email.value,
      [password.name]: password.value,
    }
    console.log('~ userInfo', userInfo)
    formEl.reset()
  }
})

// @ ---------------------------------------------------------------------------------------------------------

// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
