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

// let getPhotos = () => {
//   return Photo.find({}, null).exec();
// }

// let getPlaylists = (id) => {
//   return Playlist.findById(id).exec();
// }

// let insertPhoto = (photo) => {
//   return Photo.insertMany(photo);
// }

// let insertPlaylist = (playlist) => {
//   return Playlist.insertMany(playlist);
// }

module.exports ={
  Photo,
  Playlist
}
