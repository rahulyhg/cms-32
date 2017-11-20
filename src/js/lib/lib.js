console.log('I go first!')

const burgerIcon = document.getElementById('burger-menu')
const menu = document.getElementsByTagName('ul')[0]

burgerIcon.addEventListener('click', function() {
  for(let child of this.children) {
    if(!child.classList.contains('change')) {
      child.classList += ' change'
      menu.style.display = 'inline-block'

    }
    else {
      child.classList.remove('change')
      menu.style.display = 'none'
    }

  }
})

