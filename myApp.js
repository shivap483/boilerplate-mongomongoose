const mongoose = require('mongoose');
const dbConfig = require("./db.config");

dbConfig._connect();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [{ type: String }]
})
const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const shiva = new Person({ name: "Shiva", age: 24, favoriteFoods: ["dosa", "biryani"] });
  shiva.save((err, data) => {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err)
    return done(null, data)
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, result) => {
    if (err) done(err)
    done(null, result)
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, result) => {
    if (err) done(err)
    done(null, result)
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, result) => {
    if (err) done(err)
    done(null, result)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
