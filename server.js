const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")

server.use(express.static('public'))
// server.use('/static', express.static(__dirname + '/public')); //para criar um caminho relativo de acordo com o SO
// server.use(routes)
server.set('view engine', 'njk')

nunjucks.configure('view', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    res.render("index")
})

server.get("/receitas", function(req, res){
    res.render("receitas", {items: receitas})
})

server.get("/receita", function(req, res){
    res.render("receita")
})


server.get("/sobre", function(req, res){
    res.render("sobre")
})

server.get("/", function(req, res){
    res.render("index")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });


server.listen (5011, function(){
    console.log('server foodfy is running...')
})