const fs = require('fs');
// const axios = require("axios");
// const inquirer = require("inquirer");
// const App = require('./../app.js')
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole()  {
        return "Intern";
    }
}

module.exports = Intern; 