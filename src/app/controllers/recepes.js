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

        const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }

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
    put(req, res) {
        const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }
    },
    delete(req, res) {
        return
    }
}