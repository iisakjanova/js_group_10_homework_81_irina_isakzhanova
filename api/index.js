const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const links = require('./app/links');

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;

app.use('/links', links);

const run = async () => {
    await mongoose.connect('mongodb://localhost/links');

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

run().catch(e => console.error(e));
