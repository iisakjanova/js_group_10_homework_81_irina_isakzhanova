const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
    },
    originalUrl: {
        type: String,
        required: true
    }
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;