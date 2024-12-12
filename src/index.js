const express = require('express');
const app = express();
const morgan = require('morgan');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//Poder resivir datos de formularios
app.use(express.json());//Poder resivir formatos json

//routes
app.use(require('./routes/index'));
app.use(require('./routes/musica'));

//Empezando el sercvidor
app.listen(3000, () => {
    console.log(`Server esta correindo en puerto ${3000}`);
    });