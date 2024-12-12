const {Router} = require('express');
const router = Router();

router.get('/rock', (req, res) => {
    const data = {
        "name": "Freddy",
        "website": "Freddy.musica.com"
    };
    res.json(data);

});

module.exports = router;