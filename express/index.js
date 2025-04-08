//Express is used to simplify and organize server-side code with minimal syntax

//import express 

const express = require('express')

// create object . app holds all feature of express

const app = express();


app.get('/', (req, res) => {
    res.end('Welcome to the Home Page')
})



app.get('/about', (req, res) => {
    res.end(`Welcome to the Home Page ${req.query.name}`)
})

//listen sever 

app.listen(8000, () => console.log('Your sever is running at : localhost:8000'))