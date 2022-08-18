const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')
const session = require('express-session')
app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, sameSite: true }
}))


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))
app.use(routes)


app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})