const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')

class Intern {
    constructor(role, school) {
        this.role = role;
        this.school = "UCLA";
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return "UCLA";
    }
}

module.exports = Intern; 