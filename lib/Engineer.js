const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')
const Employee = require('./Employee')

class Engineer extends Employee  {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole()  {
        return "Engineer";
    }
}

// printInfo() {
//     for (var key in this) {
//       console.log(`${key}: ${this[key]}`);
//     }
//   }



module.exports = Engineer; 