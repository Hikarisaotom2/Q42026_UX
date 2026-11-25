
const express = require('express');
const parser =require('body-parser');
const app = express()


//Configurar parser 
app.use(parser.urlencoded());

// Puerto de ejecucion del servidor 
const port = 3000;
/*
    Callback: es un proceso que se ejecuta al finalizar otro proceso async
    Ruta:  la parte de la URL que nos indica o da detalles 
    Endpoint: la mezcla de una ruta con el tipo de solicitud de HTTP
        C- > POST
        R -> GET 
        U -> UPDATE/PUT 
        D -> DELETE
*/
app.listen(port,()=>{
    console.log("Mi server esta activo en el puerto "+port);

});

// console.log("Mi server esta activo en el puerto, log fuera del callback "+port); falso positivo


app.get('/hola', (req,res)=>{
    console.log('Se recibe una solicitud..... procesando datos');
    res.status(200).send({
        mensaje:"Hola Mundo!"
    });
});
/*
    Dos formas de enviar informacion al endpoint.
    1. Body 
    2. Req Params

*/
app.post('/crearUsuario', (req,res)=>{
    
    // console.log(req);
    console.log('Se recibe una solicitud POST /CREARUSUARIOS..... procesando datos');
    console.log('REQUEST');
    console.log(req.body.userName);
    console.log(req.body.password);

    
    res.status(202).send({
        mensaje:"Usuario creado!",
        user: req.body.userName,
        password:req.body.password
    });
});




/*
Reglas de la comunicación entre BE/FE 
Cliente(FE/ cualquier servicio que consuma al API)
 y Servidor (BE/API)

 ->BE tiene el control sobre a comunicacion....
    1 Como se establece o como se realiza la comunicacion
    2 Como nos va a responder ( status codes y estructura)
    3 Establece a quien le responde 
    4 Cuanta informacion o que informacion responde 
    5 BE establece que es o no un error 

*/




