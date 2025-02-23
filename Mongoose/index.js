const mongoose = require('mongoose');
require('dotenv').config();

const users = require('./schemas/users');

const main = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@clusterdiprova.rrfka.mongodb.net/progetto?retryWrites=true&w=majority&appName=ClusterDiProva`)

    /*
    await users.create({
            id: '1',
            name: 'Henry',
            cognome: 'Ford',
            nascita: new Date('1999-01-01'),
        });
    await users.create({
            id: '2',
            name: 'John',
            cognome: 'Doe',
            nascita: new Date('1999-01-01'),
        });
    await users.create({
            id: '3',
            name: 'Jane',
            cognome: 'Doe',
            nascita: new Date('1999-01-01'),
        });
    await users.create({
            id: '4',
            name: 'Alice',
            cognome: 'Smith',
            nascita: new Date('1999-01-01'),
        });
    await users.create({
            id: '5',
            name: 'Bob',
            cognome: 'Smith',
            nascita: new Date('1999-01-01'),
        });
    await users.create({
            id: '6',
            name: 'Charlie',
            cognome: 'Smith',
            nascita: new Date('1999-01-01'),
        });
    await users.create({
            id: '7',
            name: 'David',
            cognome: 'Smith',
            nascita: new Date('1999-01-01'),
        });
    */

    /*
    const utente = await users.findOne({name: 'Henry'});
    console.log(utente);
    */  
    
    
    const utenti = await users.find();
    console.log(utenti);
    
    
    // await users.updateOne({name: 'Giovanni'}, {$set: {name: 'Henry'}});

    //await users.updateMany({name: 'Alice'}, {$set: {name: 'Michelle'}});

    }
main()