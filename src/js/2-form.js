const bodyForm = (document.querySelector('body').style.backgroundColor =
  'white');

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  const formData = { email, message };
  saveToLS(STORAGE_KEY, formData);
});

function restartPage() {
  const restartFormData = loadFromLS(STORAGE_KEY);
  refs.form.elements.email.value = restartFormData?.email || '';
  refs.form.elements.message.value = restartFormData?.message || '';
}

restartPage();

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  const formData = { email, message };

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}
