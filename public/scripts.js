// const currentPage = location.pathname
// const menuItems = document.querySelectorAll("header .links a")

// for (item of menuItems) {

//   if (currentPage.includes(item.getAttribute("href"))) {
//     item.classList.add("active")
//   }
// }

//adicionar items
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

  
// adicionar items
function addProximoEvent() {
  const ingredients = document.querySelector("#prox_passos");
  const fieldContainer = document.querySelectorAll(".prox_passo");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-prox_passo")
  .addEventListener("click", addProximoEvent);


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
