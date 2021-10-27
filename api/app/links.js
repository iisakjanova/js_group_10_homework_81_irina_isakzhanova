const express = require('express');
const {nanoid} = require('nanoid');

const Link = require('../models/Link');

const router = express.Router();

router.post('/', async (req, res) => {
    if (!req.body.originalUrl) {
        return res.status(400).send({error: 'Data not valid'});
    }

    let linkExists = true;
    let url;

    while (linkExists) {
        url = nanoid(7);
        const existingLinks = await Link.find({shortUrl: url});
        linkExists = Boolean(existingLinks.length)
    }

    const linkData = {
        originalUrl: req.body.originalUrl,
        shortUrl: url
    };

    const link = new Link(linkData);

    try {
        await link.save();
        res.send(link);
    } catch {
        res.sendStatus(400).send({error: 'Data not valid'});
    }
});

router.get('/:shortUrl', async (req, res) => {
    try {
        const link = await Link.findOne({shortUrl: req.params.shortUrl});

        if (link) {
            res.send({message: `Redirected to ${link.originalUrl}`});
            res.status(301).redirect(link.originalUrl);
        } else {
            res.sendStatus(404).send({error: 'Link not found'});
        }
    } catch {
        res.status(500);
    }
});

module.exports = router;