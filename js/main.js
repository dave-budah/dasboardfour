const menuBtn = document.querySelector('#menu__btn');
const closeBtn = document.querySelector('#close__btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// Theme change

const themeBtn = document.querySelector('.theme__btn');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark-theme')
}

themeBtn.addEventListener('click', () => {
    setDarkMode = localStorage.getItem('dark-theme');

    if (setDarkMode !== 'on'){
        darkMode();

        setDarkMode = localStorage.setItem('dark-theme', 'on');
    } else {
        darkMode();
        setDarkMode = localStorage.setItem('dark-theme', null);
    }
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});

let setDarkMode = localStorage.getItem('dark-theme');
if (setDarkMode === 'on') {
    darkMode();
}

