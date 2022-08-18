const { Profile } = require('../models/index')

function createProfile(data){
return Profile.create(data)
.then(data => console.log(data))
.catch(err => resizeBy.send(err))
}

module.exports = createProfile