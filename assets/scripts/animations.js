let dzMenu = document.getElementById('dz-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

dzMenu.addEventListener('click', () =>{
    menu.classList.add('open-menu')
})

menu.addEventListener('click', () =>{
    event.stopPropagation()
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('open-menu')
})