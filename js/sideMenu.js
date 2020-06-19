const menu = document.querySelector('#menuLateral')
const btnMenu = document.querySelector('#btnLateral')

function showMenu(){
    menu.style.transform = "translateX(0)";
}

btnMenu.addEventListener('click', showMenu)
