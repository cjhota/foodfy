const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()
// const receitas = require("./data")
const methodOverride = require('method-override')

server.use(express.urlencoded({ extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
// server.use('/static', express.static(__dirname + '/public')); //para criar um caminho relativo de acordo com o SO
server.use(routes)
server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5011, function () {
    console.log('server foodfy is running...')
})