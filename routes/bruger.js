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
    .get('/', async (request, response) => {
        try {
            let Sites = await controller.getBrugere();
            response.send(Sites);
        } catch (e) {
            sendStatus(e, response);
        }
    })
    .post('/', async (request, response) => {
        try{
            let {username, password, barn, adresse1, adresse2, email1, email2, tlfn1, tlfn2} = request.body;
            let PostSite = await controller.createBruger(username, password, barn, adresse1, adresse2, email1, email2, tlfn1, tlfn2)
            response.send({message: 'Bruger oprettet!'});
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