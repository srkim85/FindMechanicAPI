const jsonServer = require("json-server"); // importing json-server Library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you con use any port number here; i chose to use 3
server.use(middlewares);
server.use(router);
server.listen(port);
