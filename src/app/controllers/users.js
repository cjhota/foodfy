// const fs = require('fs')
// const data = require("../../data.json")
const receitas = require("../../data")


module.exports = {
    index(req, res) {
      return res.render("admin/users/index", {items: receitas})

        //   console.log(receitas)
    },
    about (req, res) {
        return res.render("admin/users/about")
    },

    recipes(req, res) {

        return res.render("admin/user/recipes", {
            items: receitas
            
          })
        //   console.log(receitas)
    },
    show(req, res) {
  
        const receitaIndex = req.params.index
        const receita = [...receitas]
      
        // console.log(receita[receitaIndex])
        return res.render("admin/user/show", {
            receita: receita[receitaIndex]
        })
 }
}
// routes.get("/", function (req, res) {
//     res.render("index" ,{
//       items: receitas
//     })
//   })
  
//   routes.get("/users/sobre", function (req, res) {
//     res.render("sobre")
//   })
  
//   routes.get("/users/receita", function (req, res) {
//     res.render("receita", {
//         items: receitas
//     })
//   })
  
//   routes.get("/admin/users/receitas/:index", (req, res) => {
//     const receitaIndex = req.params.index
//     const receita = [...receitas]
  
//     // console.log(receita[receitaIndex])
//     res.render("receita", {
//         receita: receita[receitaIndex]
//     })
//   })
  