
const express = require('express');

const app = express()

// Puerto de ejecucion del servidor 
const port = 3000;
/*
    Callback: es un proceso que se ejecuta al finalizar otro proceso
    Ruta:  la parte de la URL que nos indica o da detalles 
    Endpoint: lamezcla de una ruta con el tipo de solicitud de HTTP
*/
app.listen(port,()=>{
    console.log("Mi server esta activo en el puerto "+port);

});

app.get('/hola', (req,res)=>{
    console.log('Se recibe una solicitud..... procesando datos');
    res.status(200).send({
        mensaje:"Hola Mundo!"
    });
});




// console.log("Mi server esta activo en el puerto, log fuera del callback "+port); falso positivo

