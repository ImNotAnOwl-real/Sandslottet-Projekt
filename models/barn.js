const mongoose = require('mongoose');

/* 
    barn modelere et barn
    køn === true (dreng), køn === false (pige)
*/ 
const barnSchema = new mongoose.Schema({
    fornavn: String,
    efternavn: String,
    alder: { type: Number, min: 0, max: 5 },
    køn: Boolean
});

module.exports = mongoose.model('Barn', barnSchema);