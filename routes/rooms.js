const express = require('express');
const router = express.Router();
const {
  handleJoinRoom,
  handleCreateRoom,
  handleDeleteRoom,
} = require('../controllers/rooms');

router
  .route('/')
  .get(handleJoinRoom)
  .post(handleCreateRoom)
  .delete(handleDeleteRoom);

module.exports = router;
