const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

const users = [
    {
        name:'Gio',
        cognome:'Rossi',
        id: 0
    },
    {
        name:'John',
        cognome:'Doe',
        id: 1   
    },
    {
        name:'Jane',
        cognome:'Smith',
        id: 2
    },
    {
        name:'Mario',
        cognome:'Bianchi',
        id: 3   
    },
    {
        name:'Luigi',
        cognome:'Verdi',
        id: 4
    }
];


/*
app.get('/users', (req, res) => {
    res.status(302).send(users);
});


app.get('/users', (req, res) => {
    res.status(302).end();
});


app.get('/users', (req, res) => {
    res.sendStatus(404);
});


app.get('/users/:name', (req, res) => {
    const { name } = req.params;
    const user = users.find(user => user.name === name);
    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
}
);
*/

app.get('/users', (req, res) => {
    const { name } = req.query;
    const user = users.find(x => x.name === name);
    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
});

/*
app.get('/users', (req, res) => {
    const { name } = req.headers;
    const user = users.find(x => x.name === name);
    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
});
*/
