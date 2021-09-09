const fs = require('fs')
const data = require("../../data.json")
const receitas = require("../../data")


module.exports = {
    index(req, res) {
        return res.render("users/index" ,{
            items: receitas
          })
    },
    about (req, res) {
        return res.render("users/about")
    },
    recepe(req, res) {

        return res.render("users/recepe", {
            items: receitas
        })

    },
    // show(req, res) {
  
    //     const receitaIndex = req.params.index
    //     const receita = [...receitas]
      
    //     // console.log(receita[receitaIndex])
    //     return res.render("user/show", {
    //         receita: receita[receitaIndex]
    //     })
    // }
}