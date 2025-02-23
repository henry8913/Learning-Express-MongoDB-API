# Learning Express.js & MongoDB

Questa repository contiene una serie di esercizi pratici per imparare a sviluppare API utilizzando **Express.js** e a interagire con **MongoDB** utilizzando sia il driver nativo che **Mongoose**.

## 📂 Struttura della repository

- **Express.js - API/** → Creazione di API REST con Express.js.
- **MongoDB/** → Connessione e operazioni CRUD con MongoDB.
- **Mongoose/** → Utilizzo di Mongoose per la gestione dei dati in MongoDB.
- **Node.js/** → Esercizio introduttivo su Node.js per comprendere il funzionamento del runtime.

<p align="center">
    <img src="img/cover.jpg" alt="UserHub Logo" width="100%" />
</p>

## 🚀 Come usare questo progetto

### 1️⃣ Clonare la repository
```bash
git clone https://github.com/TUO-USERNAME/Learning-Express-MongoDB.git
cd Learning-Express-MongoDB
```

### 2️⃣ Installare le dipendenze
Ogni cartella contiene un progetto separato con il proprio `package.json`. Quindi, per eseguire un esercizio:

```bash
cd Express.js - API  # Sostituisci con la cartella desiderata
npm install
node index.js  # Oppure npm start se definito in package.json
```

### 3️⃣ Configurare il file `.env`
Se un progetto richiede una connessione a MongoDB, crea un file `.env` nella cartella corrispondente e inserisci le credenziali come esempio:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=3000
```

## 📌 Descrizione degli esercizi

### 🔹 **Express.js - API**
- Creazione di API REST con Express.js
- Gestione delle rotte (GET, POST, PUT, DELETE)
- Middleware e gestione degli errori

### 🔹 **MongoDB**
- Connessione a MongoDB
- Operazioni CRUD con il driver nativo di MongoDB
- Gestione dei database e collezioni

### 🔹 **Mongoose**
- Definizione di modelli e schemi con Mongoose
- Operazioni CRUD con Mongoose
- Validazione dei dati

### 🔹 **Node.js**
- Introduzione a Node.js
- Utilizzo dei moduli nativi
- Creazione di un semplice server con HTTP

## 🤝 Contribuire
Se vuoi migliorare questi esercizi o aggiungere nuovi concetti, sentiti libero di aprire una **Pull Request**!

## 📜 Licenza
Questo progetto è distribuito sotto la licenza **MIT**.

---

**Buon coding! 🚀**

