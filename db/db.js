const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  img_url: String,
  tag: String
});

const playlistSchema = new mongoose.Schema({
  url: String,
  name: String
});

const Photo = mongoose.model('Photo', photoSchema);
const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports ={
  Photo,
  Playlist
}
