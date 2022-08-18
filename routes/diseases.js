const routes = require('express').Router()

const Controller = require('../controllers/diseases')

routes.get('/', Controller.home)

// daftar tabel (no, user, disease)
// routes.get('/disease', Controller.home)

// daftar disease+description
routes.get('/list', Controller.diseases)

// add disease + description
routes.get('/add', Controller.add)

// add disease + description
routes.post('/add', Controller.create)

// edit disease + description
routes.get('/edit/:id', Controller.edit)

// edit disease + description
routes.post('/edit/:id', Controller.update)

// delete disease + description
routes.get('/delete/:id', Controller.delete)

module.exports = routes