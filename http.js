const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our homepage");
    }
    if (req.url === "/about") {
        res.end("Our history");
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Can't find your page</p>
    <a href="/">back home</a>
    `)
})

server.listen(port = 5000);

