// const fs = require("fs");
// // const data = require("../../../data.json");
const recipes = require("../../data");
// const receitas = require("../../data");

module.exports= {

index (req, res) {
    // console.log(recipes)
    return res.render("users/index", { items:recipes  })//{ items: data.recipes }
},                                      

about (req, res) {
    // console.log(recipes)

    return res.render("users/about")
},

recipes (req, res) {
    // console.log(recipes)

    // return res.send("Estou aqui")
    return res.render("users/recipes", { items: recipes  })
},

show (req, res) {
  const recipeIndex = req.params.index
//   recipes[recipeIndex]
  const recipe = [...recipes]

  res.render('users/recipe', {  recipes: recipe[recipeIndex] }) //recipe: recipe[recipeIndex] ,
}
//     const recipeIndex = req.params.index;
//     // data[recipeIndex]
//     const recipe = [...recipe];

//     // const recipe = data.recipes[recipeIndex]
//     console.log(recipe)

//     return res.render("users/recipe", { recipe: recipe[recipeIndex]})//items: recipe{ items: recipe }
}
