const data = require('../../data.json')
exports.index = function (req, res) {
    return res.render("users/index", { items: data.recipes })

}                                      

exports.about = function (req, res) {
    return res.render("users/about")
}

exports.recipes = function (req, res) {
    return res.render("users/recipes", { items: data.recipes })
}

exports.recipe = function (req, res) {
    const recipeIndex = req.params.index;
    data[recipeIndex]
    const recipe = data.recipes[recipeIndex]
    console.log(recipe)

    return res.render("users/recipe", { items: recipe })
}
