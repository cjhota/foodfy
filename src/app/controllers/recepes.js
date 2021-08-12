const fs = require('fs')
const data = require("../../data.json")

module.exports = {
    index(req, res) {
        return res.render("admin/receitas/index")
    },
    create(req, res) {
        return res.render("admin/receitas/create")
    },
    post(req, res) {

        res.send(req.body)

    },
    show(req, res) {
        const receitaIndex = req.params.index
        const receita = [...receitas]

        return res.render("admin/receitas/show"), { receita: receita[receitaIndex] }
    },
    edit(req, res) {
        return res.render("admin/receitas/edit")
    },
}