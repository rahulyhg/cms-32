console.log('I go first!')

const burgerIcon = document.getElementById('burger-menu')
const nav = document.getElementsByTagName('nav')[0]
const menu = document.getElementsByTagName('ul')[0]
const links = document.getElementsByClassName('link')

burgerIcon.addEventListener('click', function() {
  for(let child of this.children) {
    if(!child.classList.contains('change')) {
      child.classList += ' change'
      //menu.style.display = 'inline-block'
      menu.style.opacity = '1'
      nav.style.height = '100vh'

    }
    else {
      child.classList.remove('change')
      //menu.style.display = 'none'
      menu.style.opacity = '0'
      nav.style.height = '41px'

    }

  }
})

for(let link of links) {
  link.addEventListener('click', function() {
    for(let child of burgerIcon.children) {
      child.classList.remove('change')
    }

    menu.style.opacity = '0'
    nav.style.height = '41px'
  })
}



(function report_ready(){console.log('ready!')})()
