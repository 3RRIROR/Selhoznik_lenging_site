document.querySelector('.setting_theme').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
  });
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.getElementById("theme_image").replaceChild = "/IMAGE/black_lune.svg";
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector("theme_image").replaceChild = "/IMAGE/Light_Sun.svg";
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();