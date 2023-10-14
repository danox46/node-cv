const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoURI = process.env.DB_URL;
const dbName = process.env.DB_NAME;

const maxRetries = 5;
const delay = 500;

let client = null;

const connectToDatabase = async () => {
  if (client) {
    return client.db(dbName);
  }

  client = new MongoClient(mongoURI, { useUnifiedTopology: true });
  let retries = 0;
  while (true) {
    try {
      await client.connect();
      return client.db(dbName);
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const createDocument = async (collectionName, document) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  let retries = 0;
  while (true) {
    try {
      return await collection.insertOne(document);
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const readDocuments = async (collectionName, query = {}, options = {}) => {
  const { page = 0, pageSize = 10, sort = {} } = options;
  const skip = page * pageSize;

  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  let retries = 0;
  while (true) {
    try {
      const cursor = await collection
        .find(query)
        .skip(skip)
        .limit(pageSize)
        .sort(sort);
      const documents = await cursor.toArray();
      return documents;
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const updateDocument = async (collectionName, query, update) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  await retryLogic();

  let retries = 0;
  while (true) {
    try {
      await collection.updateOne(query, { $set: update });
      return;
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const deleteDocument = async (collectionName, query) => {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  let retries = 0;
  while (true) {
    try {
      await collection.deleteOne(query);
      return;
    } catch (error) {
      retries++;
      if (retries === maxRetries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

module.exports = {
  createDocument,
  readDocuments,
  updateDocument,
  deleteDocument,
};
