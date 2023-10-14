const { MongoClient } = require("mongodb");
require("dotenv").config();
const { retryLogic } = require("../network");

const mongoURI = process.env.DB_URL;
const dbName = process.env.DB_NAME;

let client = null;

const connectToDatabase = async () => {
  if (client) {
    return client.db(dbName);
  }

  client = new MongoClient(mongoURI, { useUnifiedTopology: true });
  await retryLogic(client.connect());

  return client.db(dbName);
};

const createDocument = async (collectionName, document) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  await retryLogic(collection.insertOne(document));
};

const readDocuments = async (collectionName, query = {}, options = {}) => {
  const { page = 0, pageSize = 10, sort = {} } = options;
  const skip = page * pageSize;

  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  const cursor = retryLogic(
    collection.find(query).skip(skip).limit(pageSize).sort(sort)
  );
  const documents = await cursor.toArray();
  return documents;
};

const updateDocument = async (collectionName, query, update) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  await retryLogic(collection.updateOne(query, { $set: update }));
};

const deleteDocument = async (collectionName, query) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  await retryLogic(collection.deleteOne(query));
};

module.exports = {
  createDocument,
  readDocuments,
  updateDocument,
  deleteDocument,
};
