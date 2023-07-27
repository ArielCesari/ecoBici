const burgerMenu = document.getElementById('burgerMenu');
const navBar = document.getElementById('navBar');

burgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
});