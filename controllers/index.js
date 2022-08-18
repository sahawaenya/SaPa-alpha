
class Controller {
    static home (req,res) {
        const titlePage = 'home'
        res.render('home', {titlePage})
    }
}

module.exports = Controller