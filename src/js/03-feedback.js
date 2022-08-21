// імпортуємо бібліотеку
import throttle from "lodash.throttle";
// задаємо ключ
const STORAGE_KEY = 'feedback-form-state';

// знаходимо об'єкти
const refr = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// вішаємо слухачі подій
refr.form.addEventListener('input', throttle(onTextInput, 500));
refr.form.addEventListener('submit', onFormSubmit);
// виклик функції перевірки данних в сховищі під кожне завантаження
populateText();

// функція відстеження записів в текстових полях
function onTextInput(e) {
  // сховище та отримуємо значення поля
  let formData = {
    email: refr.input.value,
    message: refr.textarea.value
  }
  // зберігаємо знаення в сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  console.log('formData => ', formData);
};

// функція реагування натискання на кнопку
function onFormSubmit(e) {
  // встановлює поведінку за замовчуванням
  e.preventDefault();  
  //todo виводимо повідомлення якщо поля не заповнені
  const inputEl = refr.input.value;
  const textareaEl = refr.textarea.value;
  if (inputEl === '' || textareaEl === '') {
    return alert('Заповніть усі поля 🤬')
  }
  // чистимо текстові поля input
  e.currentTarget.reset();
  // ...та сховище
  localStorage.removeItem(STORAGE_KEY);
};

function populateText() {  
  // отримуємо значення із сховища
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // якщо там щось було - новлюємо DOM
  if (savedMessage) {
    refr.input.value = persisterdForm.email
    refr.textarea.value = persisterdForm.message
  };
}
