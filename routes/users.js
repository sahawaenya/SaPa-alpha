const routes = require('express').Router()

const Controller = require('../controllers/users')


// sign up (username, passwords, role, fullname, email)
routes.get('/signin', Controller.getSignin)
routes.post('/signin', Controller.postSignin)

routes.use(function (req, res, next) {
    if (req.session.username) {
        next()
    } 
    else {
        res.redirect('/users/signin/')
    }
})
routes.get('/', Controller.home)
routes.get('/signup', Controller.getSignup)
routes.post('/signup', Controller.postSignup)

// log in (username, passwords)

// profile + button tes Symptomp (fullname, disease + symptom% + new Date ())
routes.get('/profile', Controller.profile)

module.exports = routes