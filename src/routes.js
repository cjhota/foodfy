const express = require('express')
const routes = express.Router()
const receitas = require("./data")

const recipes = require("./app/controllers/recipes")

routes.get('/', (req, res) => {
  res.render('index', { items: receitas })
})

routes.get('/about', (req, res) => {
  res.render('about')
})

routes.get('/receitas', (req, res) => {
  console.log("Sou o erro do listar receitas")

  res.render('/receitas', { items: receitas })
})

routes.get('/recipes/:index', (req, res) => {
  // console.log("estou aqui na rotas receitas")
  const receitaIndex = req.params.index
  const receita = [...receitas]

  // console.log(receita[receitaIndex])
  res.render('recipe', { receita: receita[receitaIndex] })
})

routes.use(function (req, res) {
  res.status(404).render("not-found");
});

routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita

module.exports = routes

// const users = require("./app/controllers/users")
// const recipes = require("./app/controllers/recipes")

// routes.get("/", users.index ) 
// routes.get("/about", users.about) 
// routes.get("/recipe", users.recipes )
// routes.get("/recipes/:id", users.show) 
// routes.get('/chefs', PagesController.pagesChefs)
// routes.get('/recipes/search', PagesController.filterRecipesByTitle)

// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita