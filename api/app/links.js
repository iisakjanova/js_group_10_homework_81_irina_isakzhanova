const express = require('express');
const {nanoid} = require('nanoid');

const Link = require('../models/Link');

const router = express.Router();

router.post('/', async (req, res) => {
    if (!req.body.originalUrl) {
        return res.status(400).send({error: 'Data not valid'});
    }

    const linkData = {
        originalUrl: req.body.originalUrl,
        shortUrl: nanoid(7),
    };

    const link = new Link(linkData);

    try {
        await link.save();
        res.send(link);
    } catch {
        res.sendStatus(400).send({error: 'Data not valid'});
    }
});

module.exports = router;