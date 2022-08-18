const fs = require('fs')
let users = []

users.push(
    {
        username: 'sahawae',
        email: 'sahawae@jimail.com',
        password: 'sahawae123',
        role: 'admin'
    },
    {
        username: 'sahakedua',
        email: 'sahawaekedua@jimail.com',
        password: 'sahawae123',
        role: 'client'
    },
    {
        username: 'sahaketiga',
        email: 'sahawaeketiga@jimail.com',
        password: 'sahawae123',
        role: 'client'
    }
    
)
users = JSON.stringify(users, null, 2)
fs.writeFileSync('./user.json',users)
console.log(users);

