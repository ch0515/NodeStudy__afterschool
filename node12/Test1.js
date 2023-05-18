const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="post">
    <input type="submit" name = "position" value="문과생">
    <input type="submit" name="position" value="이과생">
  </form>
  `);
});