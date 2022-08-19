const routes = require('express').Router()

const Controller = require('../controllers/diseases')

routes.use(function (req, res, next) {
    if (req.session.username) {
        next()
    } 
    else {
        res.redirect('/users/signin/')
    }
})

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

// disease result
routes.get('/result', Controller.resultList)

// disease edit
routes.get('/set/:Profile.id', Controller.setDiseasePerProfile)

// disease set
routes.post('/set/:Profile.id', Controller.updateDiseasePerProfile)

module.exports = routes