const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 6001;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9bi2h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Genius car DB connected');
  console.log('hello');
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) =>{
    res.send('Running Genius Server');
});

// hello upa

app.listen(port, () =>{
    console.log('Listening to port', port);
})