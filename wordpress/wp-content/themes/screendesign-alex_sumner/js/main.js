console.log('I go first!')

const burgerIcon = document.getElementById('burger-menu')
const nav = document.getElementsByTagName('nav')[0]
const menu = document.getElementsByTagName('ul')[0]
const links = document.getElementsByClassName('link')


// reset the burger menu when resizing at width > 640

window.addEventListener('resize', function () {
  if(window.innerWidth > 640)
    menu.style.opacity = '1'
  else
    menu.style.opacity = '0'

  for(let link of links) {
    link.removeEventListener('click')
  }
})

burgerIcon.addEventListener('click', function() {
  addEventCloseMenu()

  for(let child of this.children) {
    if(!child.classList.contains('change')) {
      child.classList += ' change'
      menu.style.opacity = '1'
      nav.style.height = '100vh'
    }
    else {
      child.classList.remove('change')
      menu.style.opacity = '0'
      nav.style.height = '41px'
    }

  }
})

function addEventCloseMenu() {
  for(let link of links) {
    link.addEventListener('click', function() {
      for(let child of burgerIcon.children) {
        child.classList.remove('change')
      }
      menu.style.opacity = '0'
      nav.style.height = '41px'
    })
  }
}





(function report_ready(){console.log('ready!')})()
