console.log('I go first!')

const burgerIcon = document.getElementById('burger-menu')
const menu = document.getElementsByTagName('nav')[0]

burgerIcon.addEventListener('click', function() {
  for(let child of this.children) {
    if(!child.classList.contains('change')) {
      child.classList += ' change'
      menu.style.display = 'block'
    }
    else {
      child.classList.remove('change')
      menu.style.disply = 'none'
      console.log(menu.style.display)
    }

  }
})

