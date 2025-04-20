const http = require('http');
const fs = require('fs');
const path = require('path');

const webServer = http.createServer((req, res) => {

    if (req.url === '/login') {
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















// const myserver = http.createServer((req, res) => {



//     if (req.url === '/') {

//         const filePath = path.join(__dirname, 'login.html');

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 return res.end('Error loading the HTML file ');
//             }

//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });

webServer.listen(8100, () => {
    console.log('URL: http://localhost:8100');
});
