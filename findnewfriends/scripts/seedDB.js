const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/friendFinder",
  {
    useMongoClient: true
  }
);

const friendSeed = [
  {
    firsName: "james",
    lastName: "smith",
    eMail: "jamessmith@accio.com",
    password: "start123",
    imageURL: "../public/assets/1.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "false",
    quizQuestion3: "true",
  },

   {
    firsName: "john",
    lastName: "johnson",
    email: "johnjohnson@accio.com",
    password: "start123",
    imageURL: "../public/assets/2.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },
   
   {
    firsName: "robert",
    lastName: "williams",
    email: "robertwilliams@accio.com",
    password: "start123",
    imageURL: "../public/assets/3.jpeg",
    quizQuestion1: "false",
    quizQuestion2: "true",
    quizQuestion3: "false",
  },

  {
    firsName: "michael",
    lastName: "jones",
    email: "michaeljones@accio.com",
    password: "start123",
    imageURL: "../public/assets/4.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "false",
    quizQuestion3: "false",
  },

   {
    firsName: "william",
    lastName: "brown",
    email: "williambrown@accio.com",
    password: "start123",
    imageURL: "../public/assets/5.jpeg",
    quizQuestion1: "false",
    quizQuestion2: "false",
    quizQuestion3: "false",
  },

  {
    firsName: "david",
    lastName: "davis",
    email: "daviddavis@accio.com",
    password: "start123",
    imageURL: "../public/assets/6.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },

  {
    firsName: "richard",
    lastName: "miller",
    email: "richardmiller@accio.com",
    password: "start123",
    imageURL: "../public/assets/7.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "false",
    quizQuestion3: "true",
  },

  {
    firsName: "joseph",
    lastName: "wilson",
    email: "joseiphwilson@accio.com",
    password: "start123",
    imageURL: "../public/assets/8.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "false",
    quizQuestion3: "true",
  },

  {
    firsName: "thomas",
    lastName: "moore",
    email: "thomasmoore@accio.com",
    password: "start123",
    imageURL: "../public/assets/9.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "false",
    quizQuestion3: "true",
  },

  {
    firsName: "charles",
    lastName: "taylor",
    email: "charlestaylor@accio.com",
    password: "start123",
    imageURL: "../public/assets/10.jpeg",
    quizQuestion1: "false",
    quizQuestion2: "true",
    quizQuestion3: "false",
  },
  
  {
    firsName: "anna",
    lastName: "mason",
    email: "annamason@accio.com",
    password: "start123",
    imageURL: "../public/assets/51.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },

  {
    firsName: "kimberly",
    lastName: "cruz",
    email: "kimberlycruz@accio.com",
    password: "start123",
    imageURL: "../public/assets/52.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "false",
  },

  {
    firsName: "emily",
    lastName: "murray",
    email: "emilymurray@accio.com",
    password: "start123",
    imageURL: "../public/assets/53.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "false",
    quizQuestion3: "true",
  },

  {
    firsName: "laura",
    lastName: "tucker",
    email: "lauratucker@accio.com",
    password: "start123",
    imageURL: "../public/assets/54.jpeg",
    quizQuestion1: "false",
    quizQuestion2: "true",
    quizQuestion3: "false",
  },

  {
    firsName: "amy",
    lastName: "henry",
    email: "amyhenry@accio.com",
    password: "start123",
    imageURL: "../public/assets/55.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },

  {
    firsName: "virginia",
    lastName: "burns",
    email: "virginiaburns@accio.com",
    password: "start123",
    imageURL: "../public/assets/56.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "false",
  },

  {
    firsName: "angela",
    lastName: "morales",
    email: "angelamorales@accio.com",
    password: "start123",
    imageURL: "../public/assets/57.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },

  {
    firsName: "lisa",
    lastName: "ellis",
    email: "lisaellis@accio.com",
    password: "start123",
    imageURL: "../public/assets/58.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },

  {
    firsName: "ruth",
    lastName: "kennedy",
    email: "ruthkennedy@accio.com",
    password: "start123",
    imageURL: "../public/assets/59.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "true",
  },

  {
    firsName: "melissa",
    lastName: "webbb",
    email: "melissawebb@accio.com",
    password: "start123",
    imageURL: "../public/assets/60.jpeg",
    quizQuestion1: "true",
    quizQuestion2: "true",
    quizQuestion3: "false",
  },
];

db.Profile
  .remove({})
  .then(() => db.Profile.collection.insertMany(friendSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });