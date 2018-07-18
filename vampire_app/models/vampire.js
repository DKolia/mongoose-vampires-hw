const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const vampireSchema = new Schema({
    name: {String, require: true},
    hair_color: {String, default: "blonde"},
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    {victims: Number, min: 0}
});

const Vampire = mongoose.model("Vampire", vampireSchema);
module.exports = Vampire
