const { Router } = require("express");
const router = Router();
const musica = require("../musica.json");
console.log(musica);
const _ = require("underscore");


router.get("/", (req, res) => {
    res.json(musica);
});


//Ruta para agregar datos a la base de datos de musica.json
router.post("/", (req, res) => {
    console.log(req.body);

    const { banda, genero, origen } = req.body;
    if (banda && genero && origen) {
        const id = musica.length + 1;
        const newMusica = { ...req.body, id };
        console.log(newMusica);
        musica.push(newMusica);
        res.json(musica);
    } else {
        res.status(5000)("Error al agregar datos");
    }
});


//Ruta para eliminar datos de la base de datos de musica.json
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    _.each(musica, (musica, i) => {
        if (musica.id == id) {
            musica.splice(i, 1);
        }
    });
    res.send("Eliminado");
    //res.send(musica);
});

module.exports = router;
