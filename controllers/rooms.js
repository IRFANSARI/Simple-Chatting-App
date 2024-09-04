function handleJoinRoom(req, res) {
  const roomID = req.query.rid;
  console.log(roomID);
  res.send(`A client has been connected to Room ID: ${roomID}`);
}

function handleCreateRoom(req, res) {
  const roomID = String(Math.floor(1000 + Math.random() * 9000));
  res.end(roomID);
}

function handleDeleteRoom(req, res) {
  res.end(`This room is deleted...`);
}

module.exports = {
  handleJoinRoom,
  handleCreateRoom,
  handleDeleteRoom,
};
