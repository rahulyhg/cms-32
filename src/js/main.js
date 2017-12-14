console.log('I go first!')

var burgerIcon = document.getElementById('burger-menu')
var nav = document.getElementsByTagName('nav')[0]
var menu = document.getElementsByTagName('ul')[0]
var links = document.getElementsByClassName('link')


// reset the burger menu when resizing at width > 640

window.addEventListener('resize', function () {
  if(window.innerWidth > 640)
    menu.style.opacity = '1'
  else
    menu.style.opacity = '0'

  for (var link in links) {
    link.removeEventListener('click')
  }
})

burgerIcon.addEventListener('click', function() {
  addEventCloseMenu()

  for (var child in this.children) {
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
  for (var link in links) {
    link.addEventListener('click', function() {
      for(var child in burgerIcon.children) {
        child.classList.remove('change')
      }
      menu.style.opacity = '0'
      nav.style.height = '41px'
    })
  }
}





(function report_ready(){console.log('ready!')})()
