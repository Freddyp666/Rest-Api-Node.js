const { Router } = require("express");
const router = Router();
const musica = require("../musica.json");
console.log(musica);
const _ = require("underscore");//Para poder usar la funcion _.each
const req = require("express/lib/request");


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
    _.each(musica, (music, i) => {
        if (music.id == id) {
            musica.splice(i, 1);
        }
    });
    console.log("Musica eliminada");
    res.send("Eliminado");
    //res.send(musica);
});

//Ruta para actualizar datos de la base de datos de musica.json
router.put("/:id", (req,res) => {
    const {id}=req.params;
    console.log(id);
    const { banda, genero, origen } = req.body;
    console.log(banda, genero, origen);
    if (banda && genero && origen) {
        _.each(musica, (music, i) => {
            if (music.id == id) {
                music.banda = banda;
                music.genero = genero;
                music.origen = origen;
            }
        });
        res.json(musica);
    } else {
        res.status(5000)("Error al actualizar datos");
    }

});


module.exports = router;
