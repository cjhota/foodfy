// const fs = require('fs')
// const data = require("../../data.json")
// module.exports = {
//     index(req, res) {
//         return res.render("/admin/recipes/index", {recipes: data.recipes})
//     },
//     create(req, res) {
//         return res.render("/admin/recipes/create")
//     },
//     post(req, res) {

//         const keys = Object.keys(req.body)
//         for(key of keys) {
//             if(req.body[key] == "") {
//                 return res.send("Please, fill all fields")
//             }
//         }

//         res.send(req.body)

//         let {
//             avatar_url,
//             ingredients,
//             proximos_passos,
//             add_preparation,
//         } = req.body
    
//         const id = Number(data.recipes.length + 1)
//         data.recipes.push({
//             id,
//             avatar_url,
//             ingredients,
//             proximos_passos,
//             add_preparation,
//         })
    
//         fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
//             if (err) return res.send("White file error!")
    
//             return res.redirect(`/admin/recipes/${id}`)
//         })
    

//     },
//     show(req, res) {
//         const {
//             id
//         } = req.params
    
//         const foundRecepes = data.recipes.find(function (recipe) {
//             return recipe.id == id
//         })
    
//         if (!foundRecepes) return res.send("recipe not found !")
    
//         const recipe = {
//             ...foundRecepes,
//         }
    
//         return res.render("/admin/recipes/:id", { recipe })
//     },
//     edit(req, res) {
//         const { id } = req.params

//         const foundRecepes = data.recipes.find(function (recipe) {
//             return id == recipe.id
//         })
    
//         if (!foundRecepes) return res.send("recipe not found !")
    
//         const recipe = {
//             ...foundRecepes,
//         }
    
//         return res.render("/admin/recipes/:id/edit", { recipe })
//     },
//     put(req, res) {
//         const { id } = req.body
//         let index = 0
    
//         const foundRecepes = data.recipes.find(function (recipe, foundIndex) {
//             if (id == recipe.id) {
//                 index = foundIndex
//                 return true
//             }
//         })
    
//         if (!foundRecepes) return res.send("Member not found !")
    
//         const recipe = {
//             ...foundRecepes,
//             ...req.body,
//             id: Number(req.body.id)
//         }
//         data.recipes[index] = recipe
    
//         fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//             if(err) return res.send("White error!")
    
//             return res.redirect(`/recipes/${id}`)
//         })
//     },
//     delete(req, res) {
//         const { id } = req.body
    
//         const filteredRecipes = data.recipes.filter(function(recipe){
//             return recipe.id != id
//         })
    
//         data.recipes = filteredRecipes
    
//         fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//             if(err) return res.send("Write error file")
    
//             return res.redirect('/recipes')
//         })
//     }
// }