const express = require("express")
const userRoutes = require('./routes/users_routes.js')

const app = express()

const PORT = 8300


app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use("/",userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)

})