const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname+'/public'));

app.use(express.json());

app.post('/api/enquries', (req, res) => {{
  let data = JSON.parse(fs.readFileSync(__dirname+'/data/enquires.txt').toString());
  data.push(req.body);
  fs.writeFileSync(__dirname+'/data/enquires.txt', JSON.stringify(data, null, 2));
  res.send(data);
}});

app.get('/api/enquries', (req, res) => {
  const data = JSON.parse(fs.readFileSync(__dirname+'/data/enquires.txt').toString());
  res.send(data);
});

app.listen( 3000, () => {
  console.log(`Server running on http://localhost:3000/`)
});