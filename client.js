const port = process.env.PORT || 3001;

const io = require('socket.io-client');
const ioClient = io.connect(`http://localhost:${port}`);

const eventName = 'msg-seq';

ioClient.on(eventName, (msg) => {
    console.info(msg);
});