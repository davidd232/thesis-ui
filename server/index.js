// setup express server to serve static files.

const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, '../client/public')));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

server.listen(PORT, () => {
  console.log('serving static files on port', PORT);
})