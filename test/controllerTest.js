require('should');
const controller = require("../controllers/controller");

describe('controller test - promise', function () {
    it('getBrugere() test', async () => {
        let brugere = await controller.getBrugere();
        brugere.length.should.be.greaterThanOrEqual(1);
        brugere[0].username.should.be.equal('Frederik');
        brugere[1].username.should.be.equal('Frederik');

    });

    it('getBruger(username) test', async () => {
        let bruger = await controller.getBruger('Frederik');
        bruger.email1.should.be.equal('farvel');

    });

    it('deleteBarn(barn) test', async () => {
        let bruger = null;
        bruger = await controller.getBarn('Joachim');
        console.log(bruger + "FØR SLETNING");
        await controller.deleteBarn('5fb28ced12739966982d569f')
        bruger = await controller.getBarn('Joachim');
        console.log(bruger + "EFTER SLETNING");

    });

    it('deleteBruger(bruger) test', async () => {
        let bruger = null;
        bruger = await controller.getBrugere();
        bruger.length.should.be.greaterThanOrEqual(2);
        await controller.deleteBruger('5fb28ced12739966982d569f')
        bruger = await controller.getBrugere();
        bruger.length.should.be.greaterThanOrEqual(1);

    });

});


