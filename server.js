var server = require("http").createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/json" });
}).listen(3001);
var io = require("socket.io").listen(server);
console.log('Listen to the stereo tonight! tonight! tonight!')

io.sockets.on("connection", function (socket) {
    socket.on("publish", function (data) {
        io.sockets.emit("publish", { value: data.value });
    });
});
