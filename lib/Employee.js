const fs = require('fs');
// const axios = require("axios");
// const inquirer = require("inquirer");
// const App = require('./../app.js')

// let engineer = 'Engineer';
// let intern = 'Intern';
// let manager = 'Manager';

// var Employees = [];


// const employeeQuestions = [

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;




