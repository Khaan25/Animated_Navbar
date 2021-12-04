// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

'use strict'

const body = document.body,
    bgColorsBody = ['#ffb457', '#ff96bd', '#9999fb', '#ffe797', '#cffff1'],
    menu = body.querySelector('.menu'),
    menuItems = menu.querySelectorAll('.menu__item'),
    menuBorder = menu.querySelector('.menu__border')
let activeItem = menu.querySelector('.active')

function clickItem(item, index) {
    menu.style.removeProperty('--timeOut')

    if (activeItem == item) return
    if (activeItem) {
        activeItem.classList.remove('active')
    }

    item.classList.add('active')
    body.style.backgroundColor = bgColorsBody[index]
    activeItem = item
    offsetMenuBorder(activeItem, menuBorder)
}

// WHEN WE CLICK ON ANY MENU ITEM
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => clickItem(item, index))
})

// OFFSETS MENU BORDER
function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect()
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + 'px'
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
}
offsetMenuBorder(activeItem, menuBorder)


window.addEventListener('resize', () => {
    offsetMenuBorder(activeItem, menuBorder)
    menu.style.setProperty('--timeOut', 'none')
})