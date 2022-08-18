const routes = require('express').Router()

const Controller = require('../controllers/diseases')

routes.get('/', Controller.home)

module.exports = routes