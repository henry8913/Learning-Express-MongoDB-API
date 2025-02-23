const { MongoClient } = require('mongodb');
require('dotenv').config();

// AGGIORNARE QUESTA VARIABILE CON LA PROPRIA CONNESSIONE
const url = `mongodb+srv://${process.env.username}:${process.env.password}@clusterdiprova.rrfka.mongodb.net/progetto?retryWrites=true&w=majority&appName=ClusterDiProva`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        // Connessione al server
        await client.connect();
        console.log("Connesso a MongoDB!");

        // Seleziona il database
        const database = client.db("DatabaseDiHenry");
        const collection = database.collection("CollectionDiHenry");

    } catch (err) {
        console.error("Errore di connessione:", err);
    } finally {
        // Chiude la connessione
        await client.close();
        console.log("Connessione chiusa.");
    }
}

// Esegui la connessione
connectToDatabase();
