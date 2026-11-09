require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/call', (req, res) => {
    res.send('hello from call request!')
})

app.get('/login', (req, res) => {
    res.send(`<h1>please login at the chai aur code</h1>`)
})


app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
})
