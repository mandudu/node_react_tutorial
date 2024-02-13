const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [
        {
            "name": "James Park",
            "msg": "This is my first tweet!",
            "username": "mandudu"
        },
        {
            "name": "James Park",
            "msg": "React JS is so simple!",
            "username": "mandudu"
        },
        {
            "name": "John K",
            "msg": "Sweep the leg!",
            "username": "mandudu"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;