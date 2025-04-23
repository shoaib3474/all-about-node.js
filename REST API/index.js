const express = require('express')
const fs = require('fs')

const app = express()

// ✅ Support JSON and URL-encoded form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = 8200

// ✅ Helper functions for reading and writing data
const getUsers = () => {
    const data = fs.readFileSync('./MOCK_DATA.json', 'utf-8')
    return JSON.parse(data)
}

const saveUsers = (users) => {
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2))
}

// ✅ Root route for a simple welcome message
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the User API</h1><p>Visit <code>/api/users</code> to see the data.</p>')
})

// ✅ HTML page rendering all user first names
app.get('/users', (req, res) => {
    const users = getUsers()
    const html = `<ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>`
    res.send(html)
})

// ✅ Get all users as JSON
app.get('/api/users', (req, res) => {
    const users = getUsers()
    res.json(users)
})

// ✅ Add a new user
app.post('/api/users', (req, res) => {
    const body = req.body
    const users = getUsers()

    // ✅ Simple validation
    if (!body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ error: "Missing required fields" })
    }

    const newUser = {
        ...body,
        id: users.length ? users[users.length - 1].id + 1 : 1 // ✅ Improved ID logic
    }

    users.push(newUser)

    saveUsers(users)

    res.status(201).json({ message: "User created successfully", user: newUser })
})

// ✅ Get, Update, and Delete user by ID
app.route('/api/users/:id')
    .get((req, res) => {
        const users = getUsers()
        const id = Number(req.params.id)
        const user = users.find(user => user.id === id)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        res.json(user)
    })
    .patch((req, res) => {
        const users = getUsers()
        const id = Number(req.params.id)
        const user = users.find(user => user.id === id)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        Object.assign(user, req.body)

        saveUsers(users)

        res.json({ message: "User updated successfully", user })
    })
    .delete((req, res) => {
        const users = getUsers()
        const id = Number(req.params.id)
        const index = users.findIndex(user => user.id === id)

        if (index === -1) {
            return res.status(404).json({ error: "User not found" })
        }

        const deletedUser = users.splice(index, 1)

        saveUsers(users)

        res.json({ message: "User deleted successfully", deletedUser })
    })

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
