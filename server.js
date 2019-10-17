const port = process.env.PORT || 3001;

const io = require('socket.io');
const server = io.listen(port);

const eventName = 'msg-seq';

server.on('connection', (socket) => {
    var message = `this is a random number: ${Math.floor(Math.random() * 100)}`;
    
    console.log(`Client ${socket.id} connected`);

    socket.emit(eventName, message);

    socket.on('disconnect', () => {
        console.log(`Client ${socket.id} disconnected`);
    });
});