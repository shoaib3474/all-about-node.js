const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url')
const webServer = http.createServer((req, res) => {

    console.log(req.url)
    if (req.url === '/login' || req.method === "Post") {
        const filePath = path.join(__dirname, 'login.html')


        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.end(`Bhi masla ho gya hai! 😔😔😔😭 ${err} `)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === '/signup') {
        const filePath = path.join(__dirname, 'signup.html')


        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.end(`Bhi masla ho gya hai!  `)
            } else {
                res.end(data)
            }
        })
    } else {
        res.end(`<!DOCTYPE html>
            <html>
            <center>
            Bhi masla ho gya hai! 
            </center></html>`)
    }

})



webServer.listen(8100, () => {
    console.log('URL: http://localhost:8100');
});
