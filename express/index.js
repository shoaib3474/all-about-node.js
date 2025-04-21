//Express is used to simplify and organize server-side code with minimal syntax

//import express 

const express = require('express')

// create object . app holds all feature of express

const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Home Page' })
})



app.get('/about', (req, res) => {
    res.json({ message: `Welcome to the Home Page ${req.query.name} my age ${req.query.age}` })
})

//listen sever 

app.listen(8000, () => console.log('Your sever is running at : localhost:8000'))