// company.js
const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


router
    .get('/:navn', async (request, response) => {
        try {
            let Sites = await controller.getBarn(request.params.navn);
            response.send(Sites);
        } catch (e) {
            sendStatus(e, response);
        }
    })
    .post('/', async (request, response) => {
        try{
            let {fornavn, efternavn, alder, køn} = request.body;
            let createBarnet = await controller.createBarn(fornavn, efternavn, alder, køn);
            response.send({message: 'Barn oprettet!'});
        }
        catch (e){
            sendStatus(e, response);
        }
    })


function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;