const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')

class Manager {
    constructor(role, phone) {
        this.role = role;
        this.officeNumber = 100;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return 100;
    }
}

module.exports = Manager; 