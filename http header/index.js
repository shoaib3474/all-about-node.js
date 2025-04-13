const express = require('express')
const app = express()

const PORT = 8000




app.get('/', (req, res) => {

    res.setHeader('X-Myheader', 'custom herder')
    return res.json('hello world')
    console.log(res.header)
})


// pendding











app.listen(PORT, () => {
    console.log(
        'Your Sever is Listening at :  http:localhost:8000'
    )
})