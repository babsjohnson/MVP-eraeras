const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
})