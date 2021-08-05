const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {

    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

  // Redirect for recipe details
  const cards = document.querySelectorAll('.card');
  
  for (let card of cards) {
    card.addEventListener('click', () => {
        const receitaId = card.getAttribute('id');
        window.location.href = `/receitas/${receitaId}`
      // console.log(receitaId/)
    });
  }
  
  // Hide/Show Button
  const buttons = document.querySelectorAll('.btn-collapse')
  const details = document.querySelectorAll('.details')
  
  function hideDetails(index) {
    buttons[index].addEventListener('click', () => {
      
      if (details[index].classList.contains('hide-details')) {
        details[index].classList.remove('hide-details')
        buttons[index].innerHTML = 'esconder'
      }
      else {
        details[index].classList.add('hide-details')
        buttons[index].innerHTML = 'mostrar'
      }
    })
  }
  
  for (let i = 0; i < 3; i++) {
    hideDetails(i)
  }