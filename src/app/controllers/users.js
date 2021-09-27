// const fs = require("fs");
const data = require("../../../data.json");
const recipes = require("../../data");
// const receitas = require("../../data");

module.exports= {

index (req, res) {
    return res.render("users/index", { items:recipes  })//{ items: data.recipes }
},                                      

about (req, res) {
    return res.render("users/about")
},

recipes (req, res) {
    return res.render("users/recipes", { items: recipes  })
},

show (req, res) {
  const recipeIndex = req.params.index
  const recipe = [...recipes]

  const recipe = recipes.recipes[recipeIndex]

  res.render('users/recipe', {  recipes: recipe[recipeIndex] })
}

}
