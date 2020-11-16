// controller.js
const mongoose = require('mongoose');
const Bruger = require('../models/bruger');
const Barn = require('../models/barn');
const config1 = require('../config');
const bcrypt = require('bcrypt');

mongoose.connect(config1.databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

exports.createBarn = async function createBarn(fornavn, efternavn, alder, køn) {
    return Barn.create({ fornavn, efternavn, alder, køn })
}

exports.createBruger = async function (username, password, barn, adresse1, adresse2, email1, email2, tlfn1, tlfnr2) {
    const saltRounds = 10;
    hashPw = bcrypt.hashSync(password, saltRounds);
    password = hashPw;
    return Bruger.create({ username, password, barn, adresse1, adresse2, email1, email2, tlfn1, tlfnr2 })
};


exports.getBarn = async function (fornavn) {
    return Barn.findOne().populate('Barn').where('fornavn').eq(fornavn).exec();
};

exports.getBrugere = function () {
    return Bruger.find().populate('bruger').exec();
};

exports.getBruger = async function (username) {
    return Bruger.findOne().populate('Bruger').where('username').eq(username).exec();
};


exports.deleteBarn = async function (barnId) {
    return Barn.deleteOne().where('_id').equals(barnId).exec();
};


exports.deleteBruger = async function (brugerId) {
    return Bruger.deleteOne().where('_id').equals(brugerId).exec();
};








