const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());

require('dotenv').config();

// AGGIORNARE QUESTA VARIABILE CON LA PROPRIA CONNESSIONE
const url = `mongodb+srv://${process.env.username}:${process.env.password}@clusterdiprova.rrfka.mongodb.net/progetto?retryWrites=true&w=majority&appName=ClusterDiProva`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function getDatabase() {
    await client.connect();
    return client.db("DatabaseDiHenry").collection("CollectionDiHenry");
}

app.get("/api/posts", async (req, res) => {
    try {
        const collection = await getDatabase();
        const articles = await collection.find().toArray();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Errore nel recupero degli articoli" });
    }
});

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
