const fs = require('fs')
// get the data from mock api
const getUsers = ()=>{
    const data = fs.readFileSync('./MOCK_DATA.json', 'utf-8')
    return JSON.parse(data)
}

//save new user 

const saveUsers = (users)=>{
    const data = fs.writeFileSync('../MOCK_DATA.json', JSON.stringify(users, null,2))
    

}

//exports the modules

module.exports= {
    getUsers, saveUsers
}