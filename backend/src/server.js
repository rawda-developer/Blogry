import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const app = express();
app.use('/public', express.static('public'));
let PORT = process.env.PORT || 4000;
app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    });
    const db = client.db('blogry');
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error });
  }
};
app.get('/api/articles/:name', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});
app.post('/api/articles/:name/upvote', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });

    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );
    const updatedArticle = await db
      .collection('articles')
      .findOne({ name: articleName });
    res.status(200).json(updatedArticle);
  }, res);
});
app.post('/api/articles/:name/add-comment', async (req, res) => {
  const articleName = req.params.name;
  const { username, comment } = req.body;
  withDB(async (db) => {
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName });
    console.log(articleInfo);
    console.log(articleInfo.comments);
    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, comment }),
        },
      }
    );
    const updatedArticle = await db
      .collection('articles')
      .findOne({ name: articleName });
    res.status(200).json(updatedArticle);
  }, res);
});
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
