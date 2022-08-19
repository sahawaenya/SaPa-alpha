const Help = require('../helpers/helper')
const { User, Profile } = require('../models/index')
const bcrypt = require('bcrypt')
const session = require('express-session')

class Controller{
    static home(req, res){

        const titlePage = 'User Home'
        

       return User.findAll({include:{all:true, nested:true}})
        .then(data => {
            // res.send(data)
           let coba = req.session.coba = 'coba 11111111111111a'
            res.render('./user/home', {titlePage, coba, data, Help})
        })
        .catch(err => res.send(err))


    }


    static getSignup (req,res) {
        
        console.log(req.session.coba);
        const titlePage = 'home'

        res.render('./user/signup')
    }

    static postSignup (req,res) {
        // res.send(req.body)
        const {username, password, fullName, bornDate, phoneNumber, imageUrl, email} = req.body

        User.create({username: username, password:password,email:email})
        .then((data) => {
            Profile.create({UserId: data.id, fullName:fullName, bornDate:bornDate, phoneNumber:phoneNumber, imageUrl:imageUrl})
            .then((_) => res.redirect('/users'))
            .catch( err => res.send(err))
            })
           
        .catch( err => res.send(err))
    }

    static getSignin (req,res) {
        console.log(req.session.coba);
 
        res.render('./user/signin')
    }

    static postSignin (req,res) {
        // console.log(req.body);
        const {username,password} = req.body
        if(+username == 0 || +password == 0) return res.send('Username or Password cannot be empty')
        User.findOne({where:{username:username},include:{all:true,nested:true}})
        .then(data=> {
            // res.send(data)
            console.log(bcrypt.compareSync(password, data.password));
            if(!bcrypt.compareSync(password, data.password)) {throw `login failed`}
            console.log(data.id);
            req.session.masuk = data.id        
            req.session.username = data.username
            req.session.RoleId = data.RoleId
            req.session.fullName = data.fullName
            res.redirect('/users/')
            
        })
        .catch(err => res.send(err))
       
        // res.render('./user/signin')
    }

    static profile (req,res) {
        res.send ('SaPa hi..')
    }

}

module.exports = Controller