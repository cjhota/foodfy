const express = require('express')
const routes = express.Router()
const receitas = require("./data")

const recipes = require("./app/controllers/recepes")

routes.get("/", function (req, res) {
  res.render("index")
})

routes.get("/sobre", function (req, res) {
  res.render("sobre")
})

routes.get("/", function (req, res) {
  res.render("index")
})

routes.get("/receitas", function (req, res) {
  res.render("receitas", {
      items: receitas
  })
})

routes.get("/receitas/:index", (req, res) => {
  const receitaIndex = req.params.index
  const receita = [...receitas]

  // console.log(receita[receitaIndex])
  res.render("receita", {
      receita: receita[receitaIndex]
  })
})

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita


routes.use(function (req, res) {
  res.status(404).render("not-found");
});

module.exports = routes