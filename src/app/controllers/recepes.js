const fs = require('fs')
const data = require("../../../data.json")

module.exports = {
    index(req, res) {
        return res.render("admin/receitas/index")
    },
    create(req, res) {
        return res.render("admin/receitas/create")
    },
    show(req, res) {
        const {
            id
        } = req.params
    
        const foundRecepet = data.recepes.find(function (recepet) {
            return recepet.id == id
        })
    
        if (!foundRecepet) return res.send("recepet not found !")



        return res.render("admin/receitas/show"), {
            recepet
        }
    },
    edit(req, res) {
        return res.render("admin/receitas/edit")
    },
}