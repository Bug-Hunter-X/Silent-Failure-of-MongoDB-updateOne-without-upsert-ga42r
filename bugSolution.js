```javascript
const MongoClient = require('mongodb').MongoClient;

async function run() {
  try {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Correct usage of updateOne with upsert option.
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } }, { upsert: true });
    console.log(result);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```