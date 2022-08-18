class Controller{

    static home(req, res){
        const titlePage = 'Home Diseases'

        res.render('./diseases/home', {titlePage})
    }
}

module.exports = Controller