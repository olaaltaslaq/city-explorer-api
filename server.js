'use strict';

const express = require('express');

const server = express();

const PORT = 3001;


//localhost:3001/test
server.get('/test',(request,response)=>{
    response.send('your server is working')
})

server.listen(PORT,()=>{
    console.log(`Listning on PORT ${PORT}`)
})


