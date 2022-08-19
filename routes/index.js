const routes = require('express').Router()
const Controller = require('../controllers/index')
const users = require('./users')
const diseases= require('./diseases')


routes.get('/', Controller.home)
routes.get('/signout', Controller.signout)
routes.use('/users', users)
routes.use('/diseases', diseases)




module.exports = routes