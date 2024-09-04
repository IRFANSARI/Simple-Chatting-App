const express = require('express');
const path = require('path');
const app = express();
const staticRouter = require('./routes/staticRouter');
const roomRouter = require('./routes/rooms');

app.use(express.urlencoded({ extended: false }));

app.use('/', staticRouter);
app.use('/rooms', roomRouter);

app.listen(8080, () => {
  console.log('Server running on http://127.0.0.1:8080/');
});
