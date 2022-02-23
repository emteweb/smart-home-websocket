const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const devices = require('./smartDevList');

const wss = new WebSocket.Server({ server });


wss.on('connection', ws => {
    console.log("A new client connected!");
    setInterval(() => {
        devices.getDevices();
        ws.send(JSON.stringify(smartDevices));
    }, 2000);

    ws.on('message', data => {
    
    })

    ws.on('close', () => {
        console.log("Client disconnected!");
    });

});


app.get('/api/v1/devices/', (req, res) => {
    res.send('List of devices');
});
app.get('/api/v1/devices/:id', (req, res) => {
    res.send('Hello Device');
});

server.listen(5001, () => console.log(`Listening on port ... ${server.address().port}`))