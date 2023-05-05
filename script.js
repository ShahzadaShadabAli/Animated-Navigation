const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItems = [nav1, nav2, nav3, nav4, nav5]
function navAnimation(direction1, direction2){
    navItems.forEach(function(nav, i){
        nav.classList.remove(`slide-${direction2}-${i +1}`)
        nav.classList.add(`slide-${direction1}-${i +1}`)
    })
}

function navEventListeners(){
    navItems.forEach(function(nav){
        nav.addEventListener('click', toggleNav)
    })
}

function toggleNav() {
    //Toggle On and Off
    menuBars.classList.toggle('change')
    //slide in - Overlay
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.add('overlay-slide-right')
        overlay.classList.remove('overlay-slide-left')
        navAnimation('in', 'out')


    } else {
        //Slide - In Overlay
        overlay.classList.add('overlay-slide-left')
        overlay.classList.remove('overlay-slide-right')
        //Slide - Out Nav Items
        navAnimation('out', 'in')


    }

}

//Event Listeners
menuBars.addEventListener('click', toggleNav)
navEventListeners();