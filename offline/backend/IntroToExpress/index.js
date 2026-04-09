const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h1 style='color: red'>It's working</h1>");
});

// -------------------------------------------------
// DIVISOIN
app.get('/div/:x/:y', (req, res) => {
  (req.params.y == 0) 
  ? res.send("Division not Posible")
  : res.send(req.params.x / req.params.y);
});
// -------------------------------------------------

// -------------------------------------------------
// MULTIPLICATION
app.get('/mul/:x/:y', (req, res) => {
  let result = req.params.x * req.params.y;
  (isNaN(result))
  ? res.send("Multiplication for Strings is not possible")
  : res.send(`Multiplication ${result}`);
});
// -------------------------------------------------

// -------------------------------------------------
let count = 0;
// COUNTER
app.get('/count', (req, res) => {
  res.send(`Count: ${count}`);
});

app.get('/count/INC', (req, res) => {
  res.send(`Count: ${++count}`);
});

app.get('/count/DEC', (req, res) => {
  res.send(`Count: ${--count}`);
});
// -------------------------------------------------

// -------------------------------------------------
// TODOLIST
let todos = [];

app.get('/todos')
// -------------------------------------------------

app.listen(3000, () => {{
  console.log(`Server is running on port 3000, http://localhost:3000`)
}})