const mongoose = require('mongoose');

/* 
     bruger modelere en bruger der hører til et barn
*/
const brugerSchema = new mongoose.Schema({
    username: String,
    password: String,
    barn: {type: mongoose.Schema.Types.ObjectId, ref: 'Barn'},
    adresse1: String,
    adresse2: { type: String, default: null},
    email1: String,
    email2: { type: String, default: null},
    tlfnr1: { type: Number, min: 10000000, max: 99999999},
    tlfnr2: { type: Number, min: 10000000, max: 99999999} 
});

module.exports = mongoose.model('Bruger', brugerSchema);


