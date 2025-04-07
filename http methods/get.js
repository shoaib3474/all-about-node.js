// every search in browser in GET request 


// http use handling request and response
const http = require('http')
const fs = require('fs')



const url = require("url")
// create new server
const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end()


    const date = new Date(Date.now());


    //just add http methods
    const log = `${date.toString().split('T')[0]} : ${req.method} ${req.url} :New Requested Received From User ! \n `




    const myUrl = url.parse(req.url)

    console.log(myUrl)



    //create log file to track user acctions 
    fs.appendFile(
        'log.txt', log, (erro, data) => {

        }
    )



    // response show to the user 
    switch (req.url) {
        case '/': res.end('Welcome On the Server Side . HOMEPAGE')
            break;
        case '/about': res.end('Hello From About Page!')
            break;
        case '/settings': res.end('Setting Page')
            break;

        default:
            res.end('Page Not Founded 404')

            break;
    }

})

// listen on this port

myServer.listen(8000, () => {
    console.log('Server Successfully started !')

})