const  { getUsers, saveUsers} =require("../models/user_model.js")

const { renderUserData} = require("../views/user_view.js")

exports.welcome =(req, res) => {
    res.send('<h1>Welcome to the User API</h1><p>Visit <code>/api/users</code> to see the data.</p>')
}

exports.getAllUsersHTML =  (req, res) => {
    const users = getUsers()
    const html = `<ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>`
    res.send(html)
}
//OK
exports.getAllUsersJSON= (req, res) => {
    const users = getUsers()
    res.json(users)
}

//ok
exports.createUser= (req, res) => {
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
}


// OK
exports.getUserById = (req, res) => {
    const users = getUsers()
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)

    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }

    res.json(user)
}

//OK

exports.deleteUserById =(req, res) => {
    const users = getUsers()
    const id = Number(req.params.id)
    const index = users.findIndex(user => user.id === id)

    if (index === -1) {
        return res.status(404).json({ error: "User not found" })
    }

    const deletedUser = users.splice(index, 1)

    saveUsers(users)

    res.json({ message: "User deleted successfully", deletedUser })
}