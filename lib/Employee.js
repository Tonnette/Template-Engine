const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')



class Employee {
    constructor(name, id, email, title, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

    

// Employee.prototype.officeNumber = function() {
//     if (this.role === Manager) {
//         this.officeNumber = officeNumber;
//         this.getRole() = "Manager";
//     }
// }

// Employee.prototype.gitHub = function() {
//     if (this.role === Engineer) {
//         this.github = this.github;
//         this.getRole() = "Engineer";
//     }
// }

// Employee.prototype.school = function() {
//     if (this.role === Intern) {
//         this.school = school;
//         this.getRole() = "Intern"
//     }
// }


module.exports = Employee; 




