const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// ---------------------------------------Serve index.html on root URL---------------------------


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ----------------------------------Store bookings in memory---------------------------------


const bookings = [];

// ----------------------------------Emit a new booking every 5 seconds-----------------------


setInterval(() => {
  const newBooking = {
    venueName: `Venue ${Math.floor(Math.random() * 10) + 1}`,
    partySize: Math.floor(Math.random() * 10) + 1,
    time: new Date().toLocaleTimeString()
  };

  bookings.push(newBooking);
  io.emit('new-booking', newBooking);
}, 5000);

// ---------------------------Handle Socket.IO connections----------------------------


io.on('connection', (socket) => {
  console.log('Client connected');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
