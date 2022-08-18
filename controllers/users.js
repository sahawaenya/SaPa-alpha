const { User, Profile } = require('../models/index')
const session = require('express-session')

class Controller{
    static home(req, res){
        const titlePage = 'User Home'
       let coba = req.session.coba = 'coba 11111111111111a'
        res.render('./user/home', {titlePage, coba})
    }


    static getSignup (req,res) {
        console.log(req.session.coba);
        const titlePage = 'home'

        res.render('./user/signup')
    }

    static postSignup (req,res) {
        // res.send(req.body)

        User.create(req.body)
        .then((data) => {
            Profile.create({UserId: data.id})
            .then((_) => res.redirect('/users'))
            .catch( err => res.send(err))
            })
           
        .catch( err => console.log(err))
    }

    static signin (req,res) {
       
        res.render('./user/signin')
    }

    static profile (req,res) {
        res.send ('SaPa hi..')
    }

}

module.exports = Controller