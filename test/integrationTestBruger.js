require('should');
const request = require('supertest');
const controller = require("../controllers/controller");
const app = require('../app.js');

describe('integration test - promise', function () {

    it("get('/admin/brugere') test", async () => {
        let response = await request(app)
            .get('/admin/brugere')
            .expect(200)
            .expect('Content-Type', /json/);
        console.log(response.body)
        response.body.length.should.be.greaterThanOrEqual(1);
        response.body[0].username.should.be.equal('Frederik');
        response.body[1].username.should.be.equal('Frederik');
    });


    it("post('/admin/brugere') test", async () => {
        let response = await request(app)
            .post('/admin/brugere')
            .send({
                'username': 'Frederik',
                'password': 'DetHerErOk', 
                'barn': '5fb2836358979e3be07718ff',
                'adresse1': 'Bo', 
                'adresse2': 'Gitte',
                'email1': 'farvel',
                'email2': 'Hej',
                'tlfn1': 12345678,
                'tlfn2': 23123123
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200);
        response.body.message.should.be.equal('Bruger oprettet!');
        response = await controller.getBrugere();
        response.length.should.be.greaterThanOrEqual(1);
        response[1].username.should.be.equal('Frederik');
    });
});