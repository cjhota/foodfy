const fs = require("fs");
const data = require("../../../data.json");
const receitas = require("../../data");

module.exports = {
  index(req, res) {
    console.log("Index da pagina");
    return res.render("users/index", { items: receitas });

    //   console.log(receitas)
  },
  about(req, res) {
    return res.render("users/about");
  },

  recipes(req, res) {
    console.log(receitas);
    return res.render("users/recipes", { items: receitas });
  },
  show(req, res) {
    const receitaIndex = req.params.index;
    const receita = [...receitas];

    // console.log(receita[receitaIndex])
    return res.render("users/recipe", { receita: receita[receitaIndex] });
  },
};
