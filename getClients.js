// reads json file and returns data.
const express = require('express');
const clients = require('./clients.json')

const app = express();
// const PORT = 3000; 

const getClients = () => {
    app.get('/tables', (req, res) => {
        res.send(clients)
    })
}

// getClients();
// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));