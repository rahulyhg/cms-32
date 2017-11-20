console.log('I go first!')

const burgerIcon = document.getElementById('burger-menu')
burgerIcon.addEventListener('click', function() {
  console.log(this.children)
})
