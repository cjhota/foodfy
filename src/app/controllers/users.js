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

    return res.send("Estou aqui")
    return res.render("users/recipes", { items: recipes  })
},

show (req, res) {
    // console.log(recipe)

// console.log("estou aqui na rotas receitas")
  const recipeIndex = req.params.index
  const recipe = [...recipes]

  // console.log(receita[receitaIndex])
  res.render('users/recipe', { recipe: recipe[recipeIndex] })
}
//     const recipeIndex = req.params.index;
//     // data[recipeIndex]
//     const recipe = [...recipe];

//     // const recipe = data.recipes[recipeIndex]
//     console.log(recipe)

//     return res.render("users/recipe", { recipe: recipe[recipeIndex]})//items: recipe{ items: recipe }
}
