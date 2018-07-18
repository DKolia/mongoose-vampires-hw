// 1. Require your node modules
const mongo = require("mongo");
const mongoose = require("mongoose");

// 2. Require your model (and possibly your extra data source);
const vampires = require("/populateVampires.js");

// 3. Connect your database and collection name
mongoose.connect("mongodb://localhost:27017/vampire", {useNewUrlParser: true});
// useNewUrlParser is to prevent a Mongo harmless warning/error, found on error message and recommended by Stack Overflow


// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
db.on("connected", () => {
  console.log("Mongoose has connected!");
});

db.on("error", (err) => {
  console.log(err, " is the error"
});
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

const VampiresInArray = require("./populateVampires");

Vampire.create(VampireArray, (err, response) => {
  if(err) {
    console.log(err, " is the error");
  } else {
    console.log("Populating Vampires!");
  }
})

// ### Add some new vampire data

// This is my new data set for more vampires
const vampireName = ["Baddy", "George", "Ralph", "Blight"];
const vampireDob = ["March 1, 1500", "March 5, 1900", "March 3, 1980", "March 19, 1900"];
const vampireHairColor = ["Silver", "Ebony", "Sparking", "Blood Red"];
const vampireEyeColor = ["Silver", "Ebony", "Sparking", "Blood Red"];
const vampireLoves = ["Flying", "Terrorizing", "Biting", "Dancing"];
const vampireLocations = ["London", "Transylvania", "Texas", "Chicago"];
const vampireGender = ["m", "m", "m", "?"];
const vampireVictims = [900, 500, 200, 100];

// This for loop creates more vampires, but isn't random, just uses "i"
for (var i = 0; i < vampireName.length; i++) {
  Vampire.create({
    name: vampireName[i],
    dob: vampireDob[i],
    hair_color: vampireHairColor[i],
    eye_color: vampireEyeColor[i],
    loves: vampireLoves[i],
    location: vampireLocations[i],
    gender: vampireGender[i],
    victims: vampireVictims[i]
  })
  console.log("Craeted spooky vampire!");
}




/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
