const routes = require('express').Router()

const Controller = require('../controllers/users')

// routes.use(function (req, res, next) {
//     if (req.session.username && req.session.role === 'seller') {
//       next()
//     } 
//     else if (req.session.username && req.session.role === 'buyer') {
//       next()
//     }
//   })

// sign up (username, passwords, role, fullname, email)
routes.get('/', Controller.home)

routes.get('/signup', Controller.getSignup)
routes.post('/signup', Controller.postSignup)

// log in (username, passwords)
routes.get('/signin', Controller.signin)

// profile + button tes Symptomp (fullname, disease + symptom% + new Date ())
routes.get('/profile', Controller.profile)

module.exports = routes