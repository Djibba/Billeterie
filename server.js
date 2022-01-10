#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Create Socket
 */
const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('user connected');
    io.emit('new-message', 'yooooooo');
});

io.on('new-message', (message) => {
    console.log('new message ', message);
    io.emit(message);
});

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    console.log('server started ', port);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}