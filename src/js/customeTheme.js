const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  togleTheme: document.querySelector('#theme-switch-toggle'),
  addTheme: document.querySelector('body'),
};

// localStorage.setItem('settings', JSON.stringify(Theme));
refs.togleTheme.addEventListener('change', valueTheme);

function valueTheme(event) {
  const checkTheme = event.currentTarget.checked;
  console.log(checkTheme);
  localStorage.setItem('valueTheme', JSON.stringify(checkTheme));
  checkTheme ? onDarck() : onLight();
}

function onDarck() {
  refs.addTheme.classList.add(Theme.DARK);
  refs.addTheme.classList.remove(Theme.LIGHT);
}

function onLight() {
  refs.addTheme.classList.add(Theme.LIGHT);
  refs.addTheme.classList.remove(Theme.DARK);
}

if (localStorage.getItem('valueTheme')) {
  const check = JSON.parse(localStorage.getItem('valueTheme'));
  refs.togleTheme.checked = check;
  refs.togleTheme.checked ? onDarck() : onLight();
}

// ==========localStorage===========

// console.log(refs.togleTheme);
// console.log(Theme);

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

// console.log(parsedSettings.DARK);
