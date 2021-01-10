
const http = require('http');
const app = require("./app");
const port = process.env.PORT || 8080;
const server = http.createServer(app);

console.log("\n\tClockAPI foi iniciada e está sendo servida na porta: " + port);

server.listen(port);