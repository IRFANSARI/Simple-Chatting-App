const path = require('path');

function handleJoinRoom(req, res) {
  const roomID = req.query.rid;
  res.sendFile(path.resolve('./public/chat.html'));
}

function handleCreateRoom(req, res) {
  const roomID = String(Math.floor(1000 + Math.random() * 9000));
  res.end(roomID);
}

function handleDeleteRoom(req, res) {
  // TO DO - Complete this function and integrate
  res.end(`This room is deleted...`);
}

module.exports = {
  handleJoinRoom,
  handleCreateRoom,
  handleDeleteRoom,
};
