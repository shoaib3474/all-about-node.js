const fs = require('fs')

//stor in variable               path              formet
const result = fs.readFileSync('./test_file.txt', 'utf8')
console.log(result)


//aysnc 

fs.readFile('./test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(`Error  ${err}`)
    }
    else {
        console.log(result)
    }
})