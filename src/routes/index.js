//Routes
const { Router } = require('express');//Se importa el modulo Router de express
const router = Router();


router.get('/test', (req, res) => {
    const data = {
        "name": "Freddy",
        "website": "Freddy.com"
    };
    res.json(data);

});

    module.exports = router; //Se exporta el modulo router