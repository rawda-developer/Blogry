import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
const app = express();
app.use('/public', express.static('public'));
app.use(bodyParser.json());

let PORT = process.env.PORT || 4000;
app.get('/hello', (req, res) => {
  res.send('Hello from Blogry Backend');
});
app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}`);
});
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
