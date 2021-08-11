module.exports = {
    index(req, res) {
        return res.render("admin/receitas/index")
    },
    create(req, res) {
        return res.render("admin/receitas/create")
    },
    edit(req, res) {
        return res.render("admin/receitas/edit")
    },
    show(req, res) {
        return res.render("admin/receitas/show")
    }
}