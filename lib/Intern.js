const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(role, school) {
        this.role = role;
        this.school = school;
    }

    // getRole() {
    //     return "Intern";
    // }

    // getSchool() {
    //     return "UCLA";
    // }
}

module.exports = Intern; 