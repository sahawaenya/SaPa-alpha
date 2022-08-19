
class Controller {
    static home (req,res) {
        const titlePage = 'home'
        res.render('home', {titlePage})
    }

    static signout (req,res) {
        req.session.destroy(function(err) {
            // cannot access session here
            res.send(err)
          })
          res.redirect('/users/signin')
    }

}


module.exports = Controller