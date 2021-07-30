const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const genImage = require('./genImage');
const app = express();

app.use(express.static('public'));
app.use(cors());

const data = { avatarURL: 'http://localhost:5001/api/image' };

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Address Book API!
    Use an Authorization header to work with your own data:
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})
    The following endpoints are available:
    GET /api/image
    GET /api/GetImage
    POST /api/generateImage
  </pre>
  `;

  res.send(help);
});

app.get('/api/image', (req, res) => {
  res.sendFile('image.png', { root: __dirname });
});

app.get('/api/getImage', (req, res) => {
  res.json(data);
});

app.post('/api/generateImage', bodyParser.json(), (req, res) => {
  const image = req.body;
  console.log(image.body.length);
  console.log(image.body.width);
  console.log(image);
  if (image) {
    res.json(genImage.generate(image.body.length, image.body.width));
  } else {
    res.status(403).send({
      error: 'Please provide  height and width',
    });
  }
});

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port);
});
