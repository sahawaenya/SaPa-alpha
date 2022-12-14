const { Disease, Profile, User } = require('../models')
const { Op } = require("sequelize")

class Controller{

    static home(req, res){
        const titlePage = 'Home Diseases'

        res.render('./diseases/home', {titlePage})
    }

    static diseases(req, res){
        const titlePage = 'Home Diseases'
        let options

        const { search } = req.query
        if (search) options = { where: {name: { [Op.iLike]: `%${search}%` }}}

        Disease.findAll(options)
        .then(diseases => {
            res.render('./diseases/list', { diseases,titlePage })
        })
        .catch(err => {
            res.send(err)
        })  
    }

    static add(req, res){
        const titlePage = 'Home Diseases'
        res.render('./diseases/add', {titlePage})
    }

    static create(req, res){
        let data = {
            name: req.body.name,
            description: req.body.description
        }
        Disease.create(data)
        .then(disease => {
            res.redirect('/diseases/list')
        })
        .catch(err => {
            if (err.name == 'SequelizeValidationError') {
                res.send(err.errors.map(el => el.message))
            }else {
               res.send(err) 
            }
        })
    }

    static edit(req,res){
        const titlePage = 'Home Diseases'

        Disease.findByPk(+req.params.id)
        .then(disease => {
            res.render('./diseases/edit', { titlePage, disease })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static update(req, res){
        let Updateddata = {
            name: req.body.name,
            description: req.body.description
        }

        Disease.update(Updateddata, {where: {id: +req.params.id}})
        .then(disease => {
            res.redirect('/diseases/list')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req, res){
        const titlePage = 'Home Diseases'

        Disease.destroy({ where: { id: +req.params.id }})
        .then(disease => {
            res.redirect('/diseases/list')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static resultList(req, res){
        const titlePage = 'Home Diseases'
        let options ={include: {all:true, nested:true}}

        const { search } = req.query
        if (search) options = { include: {all:true, nested:true}, where: {name: { [Op.iLike]: `%${search}%` }}}

        Profile.findAll(options)
        .then(profiles => {
            // res.send(profiles)
            res.render('./diseases/diseaseResult', { profiles, titlePage })
        })
        .catch(err => {
            res.send(err)
        }) 
    }

    static setDiseasePerProfile(req,res){
        const titlePage = 'Home Diseases'
        const {Profileid} =req.params
        let options
        // res.send(`${Profileid}`)

        const { search } = req.query
        if (search) options = { where: {name: { [Op.iLike]: `%${search}%` }}}

        Disease.findAll(options)
        .then(diseases => {
            res.render('./diseases/setdiseases', { diseases,titlePage, Profileid })
        })
        .catch(err => {
            res.send(err)
        })  
    }

    static updateDiseasePerProfile(req, res){
    //    res.send(req.body)
       const {Profileid} = req.params

       Profile.update({ DiseaseId: req.body.diseasesId }, {
        where: {
          id: Profileid
        }
      })
      .then((_)=> res.redirect('/diseases/result'))
      .catch(err => res.send(err))
    }
}

module.exports = Controller