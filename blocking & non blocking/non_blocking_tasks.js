const fs = require('fs')

//non blocking tasks not run line by line 
console.log(
    'First task'
)

// don't wait for the completion of this task 
fs.readFile('./test_file.txt', 'utf-8', (err, result) => {
    console.log(result)
})


//perform next task 

console.log('last task')