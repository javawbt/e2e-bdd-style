const chance = require('chance').Chance();
var LocalStorage = require('node-localstorage').LocalStorage;
global.localStorage = new LocalStorage('./dataContainer');

const generatedValues = {

  loginUserName: () => {
    return process.env.USER_NAME;
  },
  loginPassword: () => {
    return process.env.PASSWORD;
  },
  randomFirstName: () => {
    const firstName = chance.first();
    global.localStorage.setItem('firstName', firstName);
    return firstName;
  },
  storedFirstName: () => {
    let firstName = localStorage.getItem('firstName');
    firstName = firstName.match(/^(?:\S+\s){0}(\S+)/)[1];
    return firstName;
  },
  randomLastName: () => {
    const lastName = chance.last();
    global.localStorage.setItem('lastName', lastName);
    return lastName;
  },
  storedLastName: () => {
    let lastName = localStorage.getItem('lastName');
    lastName = lastName.match(/^(?:\S+\s){0}(\S+)/)[1];
    return lastName;
  },
  numberOfDependants0: () => {
    return '0';
  },
  numberOfDependants1: () => {
    return '1';
  },
  numberOfDependants2: () => {
    return '2';
  },
  numberOfDependants98: () => {
    return '98';
  },
  numberOfDependants101: () => {
    return '101';
  },
  numberOfDependants102: () => {
    return '102';
  },
};

module.exports = generatedValues;


 