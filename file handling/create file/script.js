// fs is built-in lib is using for files handling 
const fs = require('fs')
// to create new file 

// file path where create new file            data 
fs.writeFileSync('./test_file.txt', 'your file is created',
)


//aysnc if during creating facing error then using

fs.writeFile('./test.txt', 'this is aysnc file', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File successfully created')

    }
})