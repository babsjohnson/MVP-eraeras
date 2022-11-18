const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const db = require('../db/index.js');
const mg = require('../db/controllers.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});

app.post('/photos', (req, res) => {
  mg.getPhotos(req, res)
});

app.get('/playlists', mg.getPlaylists);

app.post('/photos', (req, res) => {
  mg.addPhoto(req, res)
});

app.post('/playlists', (req, res) => {
  mg.addPlaylist(req, res)
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
})