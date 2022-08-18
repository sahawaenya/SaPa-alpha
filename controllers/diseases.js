const { Disease } = require('../models')
class Controller{

    static home(req, res){
        const titlePage = 'Home Diseases'

        res.render('./diseases/home', {titlePage})
    }

    static diseases(req, res){
        const titlePage = 'Home Diseases'
        Disease.findAll()
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
            res.send(err)
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
}

module.exports = Controller