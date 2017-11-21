console.log('I go first!')

const burgerIcon = document.getElementById('burger-menu')
const nav = document.getElementsByTagName('nav')[0]
const menu = document.getElementsByTagName('ul')[0]

burgerIcon.addEventListener('click', function() {
  for(let child of this.children) {
    if(!child.classList.contains('change')) {
      child.classList += ' change'
      menu.style.display = 'inline-block'
      nav.style.maxHeight = '550px'
      console.log(menu.children)
    }
    else {
      child.classList.remove('change')
      menu.style.display = 'none'
      nav.style.maxHeight = '50px'

    }

  }
})

