// const currentPage = location.pathname
// const menuItems = document.querySelectorAll("header .links a")

// for (item of menuItems) {

//   if (currentPage.includes(item.getAttribute("href"))) {
//     item.classList.add("active")
//   }
// }

//Redirect for recipe details
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    const recipeId = card.getAttribute('id');
    window.location.href = `/recipes/${recipeId}`
    console.log(receitaId)
  });
}

//adicionar items
  function addIngredient () {
    const ingredients = document.querySelector('#ingredients')
    const ingredient =  document.querySelectorAll('.ingredient')
    //Realiza um clone do último ingrediente adicionado
    const newIngredient = ingredient[ingredient.length - 1].cloneNode(true)
    // Não adiciona um novo input se o último tem um valor vazio
    if(newIngredient.children[0].value == "") return false
    // Deixa o valor do input vazio
    newIngredient.children[0].value = ""
    ingredients.appendChild(newIngredient)   
  }
  function addPreparation () {
    const preparations = document.querySelector('#prox_passos')
    const preparation =  document.querySelectorAll('.prox_passo')
    const newPreparation = preparation[preparation.length - 1].cloneNode(true)
    if(newPreparation.children[0].value == "") return false
    newPreparation.children[0].value = ""
    preparations.appendChild(newPreparation)   
  }
  if(document.querySelector('.add-ingredient')){
    document.querySelector('.add-ingredient').addEventListener('click', addIngredient)
  }
  if(document.querySelector('.add-preparation')){
    document.querySelector('.add-preparation').addEventListener('click', addPreparation)
  }

// Hide/Show Button
const buttons = document.querySelectorAll('.btn-collapse')
const details = document.querySelectorAll('.details')

function hideDetails(index) {
  buttons[index].addEventListener('click', () => {

    if (details[index].classList.contains('hide-details')) {
      details[index].classList.remove('hide-details')
      buttons[index].innerHTML = 'ESCONDER'
    } else {
      details[index].classList.add('hide-details')
      buttons[index].innerHTML = 'MOSTRAR'
    }
  })
}

for (let i = 0; i < 3; i++) {
  hideDetails(i)
}
