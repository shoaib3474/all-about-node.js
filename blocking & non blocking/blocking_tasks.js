//lib 
const fs = require('fs')

//blocking task block the event loop 
// and run line by line 

console.log(
    'First task'
)

const result = fs.readFileSync('./test_file.txt', 'utf-8')


console.log(result)

console.log('last tasks')