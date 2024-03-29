const express = require('express')
const app = express()
const port = 3000

app.set('views','./views') // specify the views directory
app.set('view engine','ejs') // register the template engine

app.get('/', (req, res) => {
    const fruits = [
        { name: 'apple' },
        { name: 'banana' },
        { name: 'orange' }
    ]
    res.render('index', {
        name: 'Anam',
        age: 20,
        fruits : fruits
    })
})

app.get('/:name', (req, res) => {
    res.send(`My name is : ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})