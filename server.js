'use strict';

const express = require('express');

const server = express();

const PORT = 3003;

const weatherData = require('./assets/weather.json')

let inMemory = {}

//localhost:3003/data/weather.json
server.get('/data/weather.json',(req,res)=>{

    let weather = req.query.cityName;
    let weatherInfo = weatherData.results.find(city=>{
        if(city.name.toLowerCase()===weather) {
            return city;
        }
        inMemory[SearchQuery] = Array;
                console.log(inMemory)
                res.send(Array)
    })
    res.send(weatherInfo);
})

server.get('*',(req,res)=>{
    res.status(404).send('not found')
})

server.listen(PORT,()=>{
    console.log(`Listning on PORT ${PORT}`)
})

