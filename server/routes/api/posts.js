const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config()

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    type: req.body.type,
    val: req.body.val,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

const loadPostsCollection = async () => {
  consts = client = await mongodb.MongoClient.connect(
    `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/admin`,
    {useNewUrlParser: true}
  );
  return client.db('arduino').collection('posts');
}

module.exports = router;
