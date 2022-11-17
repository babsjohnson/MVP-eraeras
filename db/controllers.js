const { Photo, Playlist } = require('./db.js');

exports.getPhotos = async (req, res) => {
  const photos = await Photo.find({});
  res.send(photos)
}
exports.getPlaylists = async (req, res) => {
  const playlists = await Playlist.find({});
  res.send(playlists)
}
exports.addPhotos = async (req, res) => {
  const addPhoto = new Photo ({...req.body});
  res.send()
}
exports.addPlaylist = async (req, res) => {
  const photos = new Playlist ({...req.body});
  res.send()
}