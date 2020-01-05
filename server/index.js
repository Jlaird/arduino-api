const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

const posts =  require('./routes/api/posts');

app.use('/api/posts', posts);

// Hanndle Public Folder
if (process.env.NODE_ENV === 'prod') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Started on port: ${port}`))
