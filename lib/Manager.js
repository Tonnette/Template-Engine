const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')
const Employee = require('./Employee')

class Manager extends Employee  {
    constructor(role, phone) {
        this.role = role;
        this.officeNumber = phone;
    }

    // getRole() {
    //     return "Manager";
    // }

    // getOfficeNumber() {
    //     return 100;
    // }
}

module.exports = Manager; 