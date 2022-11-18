const { Photo, Playlist } = require('./db.js');

exports.getPhotos = (req, res) => {
  console.log("in get photos");
  return Photo.find({}).exec()
  .then((data) => {
    res.send(data)
  })
}
exports.getPlaylists = async (req, res) => {
  const playlists = await Playlist.find({});
  console.log(playlists.data);
  res.send(res)
}
exports.addPhoto = (req, res) => {
  Photo.insertMany(req.body)
  res.send()
}
exports.addPlaylist = async (req, res) => {
  const photos = new Playlist ({...req.body});
  res.send()
}