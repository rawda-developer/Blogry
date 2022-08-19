import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
const app = express();
app.use('/public', express.static('public'));
let PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
const fakeArticleDatabase = {
  'learn-react': {
    upvotes: 0,
    comments: [],
  },
  'learn-node': {
    upvotes: 0,
    comments: [],
  },
  'my-thoughts-on-resume': {
    upvotes: 0,
    comments: [],
  },
};
app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  fakeArticleDatabase[articleName].upvotes++;
  res.status(200).send(fakeArticleDatabase);
});
app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const { username, comment } = req.body;
  fakeArticleDatabase[articleName].comments.push({ username, comment });
  res.status(200).send(fakeArticleDatabase);
});
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
