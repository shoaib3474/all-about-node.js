const express = require('express')
const fs = require('fs')
//initialize the users 

const users = require('./MOCK_DATA.json')

const app = express()

const PORT = 8000;

//middleware as plug-In

app.use(express.urlencoded({ extended: false }), express.json())



//Routes 
//get all users list 
app.get('/api/users', (req, res) => {
    res.json(users)
})

//get indivisual users by id 
app.route('/api/users/:id').get(
    (req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
        // update 
    }
).patch((req, res) => {

    return res.json({ status: 'Pendding' })
    //delete the users with id 
}).delete((req, res) => {
    // delete  user 
    return res.json({ status: 'Pendding' })
})


app.post('/api/users', (req, res) => {


    const body = req.body;

    users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return console.log('there wa an error', err)
        }
        // Create new user 
        return res.json({ status: 'Successfully added', id: users.length });
    });

});



app.listen(PORT, () =>
    console.log('Your Sever is :   http//localhost:8000')
)

