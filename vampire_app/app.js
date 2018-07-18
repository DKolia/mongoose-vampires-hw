// 1. Require your node modules
const mongo = require("mongo");
const mongoose = require("mongoose");
const Vampires = require("./models/vampire.js");

// 2. Require your model (and possibly your extra data source);
const VampiresInArray = require("./populateVampires");

// 3. Connect your database and collection name
mongoose.connect("mongodb://localhost:27017/vampire", {useNewUrlParser: true});
// useNewUrlParser is to prevent a Mongo harmless warning/error, found on error message and recommended by Stack Overflow


// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
mongoose.connection.on("connected", () => {
  console.log("Mongoose has connected!");
});

mongoose.connection.on("error", (err) => {
  console.log(err, " is the error")
});
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you


// Vampires.create(VampiresInArray, (err, response) => {
//   if(err) {
//     console.log(err, " is the error");
//   } else {
//     console.log("Populating Vampires!");
//   }
// })

// ### Add some new vampire data

// This is my new data set for more vampires
// const vampireName = ["Baddy", "George", "Ralph", "Blight"];
// const vampireDob = ["March 1, 1500", "March 5, 1900", "March 3, 1980", "March 19, 1900"];
// const vampireHairColor = ["Silver", "Ebony", "Sparking", "Blood Red"];
// const vampireEyeColor = ["Silver", "Ebony", "Sparking", "Blood Red"];
// const vampireLoves = ["Flying", "Terrorizing", "Biting", "Dancing"];
// const vampireLocations = ["London", "Transylvania", "Texas", "Chicago"];
// const vampireGender = ["m", "m", "m", "?"];
// const vampireVictims = [900, 500, 200, 100];

// This for loop creates more vampires, but isn't random, just uses "i"
// for (var i = 0; i < vampireName.length; i++) {
//   Vampires.create({
//     name: vampireName[i],
//     dob: vampireDob[i],
//     hair_color: vampireHairColor[i],
//     eye_color: vampireEyeColor[i],
//     loves: vampireLoves[i],
//     location: vampireLocations[i],
//     gender: vampireGender[i],
//     victims: vampireVictims[i]
//   })
//   console.log("Craeted spooky vampire!");
// }

// Now that I have created them.... ???


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Write a different query for each of the following:
// - Find all the vampires that that are females
// - have greater than 500 victims
// - have fewer than or equal to 150 victims
// - have a victim count is not equal to 210234
// - have greater than 150 AND fewer than 500 victims





/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Select All Vampires That...
// - have a title property
// - do not have a victims property
// - have a title AND no victims
// - have victims AND the victims they have are greater than 1000





/////////////////////////////////////////////////
// ### Select with OR
// Select all the vampires that:
// - are from New York, New York, US or New Orleans, Louisiana, US
// - love brooding or being tragic
// - have more than 1000 victims or love marshmallows
// - have red hair or green eyes





/////////////////////////////////////////////////
//### Select objects that match one of several values
// Select all the vampires that:
// - love either frilly shirtsleeves or frilly collars
// - love brooding
// - love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// - love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *





/////////////////////////////////////////////////
//### Negative Selection
// Select all vampires that:
// - love ribbons but do not have brown eyes
// - are not from Rome
// - do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// - have not killed more than 200 people





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// - replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// - replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Update 'Guy Man' to have a gender of 'f'
// - Update 'Eve' to have a gender of 'm'
// - Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// - Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// - Rename 'Eve's' name field to 'moniker'
// - We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// - Remove a single document wherein the hair_color is 'brown'
// - We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.





/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
