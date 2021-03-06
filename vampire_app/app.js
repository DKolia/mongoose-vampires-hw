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

// Vampires.find({gender: "f"}, (err, vampire) => {
//   console.log(vampire);
// });


// - have greater than 500 victims
// Vampires.find({victims: {$gt: 500}}, (err, vampire) => {
//   console.log(vampire);
// })


// - have fewer than or equal to 150 victims
// Vampires.find({victims: {$lte: 150}}, (err, vampire) => {
//   if(err) {
//     console.log(err);
//   } else {
//       console.log(vampire);
//   }
// })


// - have a victim count is not equal to 210234
// Vampires.find({victims: {$ne: 210234}}, (err, vampire) => {
//   console.log("Were getting here");
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(vampire);
//     }
// })


// - have greater than 150 AND fewer than 500 victims
// Vampires.find({victims: {$in: [151, 500]}}, (err, vampire) => {
//   console.log(vampire);
// })

// "Commit 3 - queried for vampires"


/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Select All Vampires That...
// - have a title property
// Vampires.find({title: {$exists: true}}, (err, vampire) => {
//     console.log("We're getting here");
//       if(err) {
//         console.log(err);
//       } else {
//         console.log(vampire);
//       }
// })
// This returns sometimes an empty array if DB doens't have both the created and the provided Vampires


// - do not have a victims property
// Vampires.find({victims: {$exists: false}}, (err, vampire) => {
//   console.log("We're getting here");
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
// })


// - have a title AND no victims
// Vampires.find({victims: {$exists: false}}, {title: {$exists: true}}, (err, vampire) => {
//   console.log("We're getting here");
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
// })
// // This returns an error. I believe it is due to the fact my array has vampires that contain vampires with information that contain all paramters and ones that do not. Not a syntax error.


// - have victims AND the victims they have are greater than 1000
// Vampires.find({victims: {$exists: true}}, {victims: {$gt: 1000}},(err, vampire) => {
//   console.log("We're getting here");
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(vampire);
//   }
// })

// "Commit 4 - selected vampires"


/////////////////////////////////////////////////
// ### Select with OR
// Select all the vampires that:
// - are from New York, New York, US or New Orleans, Louisiana, US


// Vampires.find({$or: [{location: "New York, New York, Us"}, {location: "New Orleans, Louisiana, US"}], (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }
// At one point I had NY,NY posting, but the "or" seems to be misbehaving, producing an error of misc unexpected tokens
// https://docs.mongodb.com/manual/reference/operator/query/or/#op._S_or


// - love brooding or being tragic
//
// Vampires.find({$or: [{loves: "brooding"}, {loves: "being tragic"}], (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }




// - have more than 1000 victims or love marshmallows

// Vampires.find({$or: [{victims: {$gt: 1000}}, {loves: "marshmallows"}], (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }

// - have red hair or green eyes

// Vampires.find({$or: [{hair_color: "red"}, {eye_color: "green"}], (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }


// "Commit 5 - selected more vampires"


/////////////////////////////////////////////////
//### Select objects that match one of several values
// Select all the vampires that:
// - love either frilly shirtsleeves or frilly collars


// Vampires.find({$or: [{loves: "frilly shirtsleeves"}, {loves: "frilly collars"}], (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }


// - love brooding

// Vampires.find(loves: "brooding"}, (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }


// - love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

// Vampires.find({$or: [{loves: "appearing innocent"}, {loves: "trickery"}], {loves: "lurking in rotting mansions"}], {loves: "R&B msuic"}],(err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }



// - love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

// Vampires.find({loves: "fancy cloaks"}, $nin: [loves: "top hats", "virgin blood"]}, (err, vampire) => {
//     console.log("We're getting here");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(Vampires);
//     }
//   }
// })
// }

// Unsure of stacking Queries like this, but used MongoDB and stack overfloat for ideas.
// https://docs.mongodb.com/manual/reference/operator/query/nin/#op._S_nin


// "Commit 6 - selected even more vampires"


/////////////////////////////////////////////////
//### Negative Selection
// Select all vampires that:
// - love ribbons but do not have brown eyes
// - are not from Rome
// - do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// - have not killed more than 200 people


// "Commit 7 - used negative selections on vampire data"


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// - replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// - replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'


// "Commit 8 - replaced vampire data"


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Update 'Guy Man' to have a gender of 'f'
// - Update 'Eve' to have a gender of 'm'
// - Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// - Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// - Rename 'Eve's' name field to 'moniker'
// - We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".


// "Commit 9 - updated vampire data"


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// - Remove a single document wherein the hair_color is 'brown'
// - We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.


// "Commit 10 - remove vampire data"


/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
