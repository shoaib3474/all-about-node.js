const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()

app.use(express.urlencoded({ extended: false }))
const PORT = 8200;
//HTML ducoment render


app.get('/users', (req, res) => {
    const html = `<ul>
   ${users.map((user) => `<li>${user.first_name}</li>`
    ).join()}
    </ul>`
    res.send(html)
})

// get all the users 
app.get('/api/users', (req, res) => {
    res.json(users)
})


app.post('/api/users', (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 })

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }

    })
    res.json({ post: "Post Request Successfully" })
})
// get signle user















app.route(
    '/api/users/:id'
).get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => { return user.id === id })
    res.json(user)
}).patch((req, res) => {
    res.json({ post: "Patch Request Successfully" })
}).delete(
    (req, res) => {
        res.json({ post: "Delete Request Successfully" })
    }
)


app.listen(PORT, () => {
    console.log(`Server is Running on : http://localhost:${PORT}`)
})