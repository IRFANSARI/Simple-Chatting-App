const express = require('express');
const staticRouter = require('./routes/staticRouter');
const roomRouter = require('./routes/rooms');

// Defining global variables
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Handling Routes
app.use('/', staticRouter);
app.use('/rooms', roomRouter);

// Start Server
app.listen(8080, () => {
  console.log('Server running on http://127.0.0.1:8080/');
});
