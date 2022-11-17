const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eraeras', { useNewUrlParser: true });
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;