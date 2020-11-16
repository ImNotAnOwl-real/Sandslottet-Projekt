require('should');
const request = require('supertest');
const controller = require("../controllers/controller");
const app = require('../app.js');

describe('integration test - promise', function () {

    it("get('/admin/barn/Joachim') test", async () => {
        let response = await request(app)
            .get('/admin/barn/Joachim')
            .expect(200)
            .expect('Content-Type', /json/);
            
        response.body.efternavn.should.be.equal('Joachimsen');
    });

    it("post('/admin/barn') test", async () => {
        let response = await request(app)
            .post('/admin/barn')
            .send({
                'fornavn': 'Joachim',
                'efternavn': 'Joachimsen',
                'alder': 4, 
                'køn': true
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200);
        response.body.message.should.be.equal('Barn oprettet!');
        response = await controller.getBarn('Joachim');
        console.log(response)
        response.efternavn.should.be.equal('Joachimsen');
        
    });
});