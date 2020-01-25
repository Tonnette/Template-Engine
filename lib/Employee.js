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

//     getName() {
//         return inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "name",
//                     message: "enter name",
//                     validate: function (name) {
//                         return name !== "";
//                     }
//                 }
//             ])
//             .then(name => {
//                 console.log(name)
//                 // this.name.push(name);
//                 this.getID();
//             })
//     }

//     getID() {
//         return inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "id",
//                     message: "enter ID number",
//                     validate: function (id) {
//                         var reg = /^\d{3}$/;
//                         return reg.test(id) || "ID should be 3 numbers!";
//                     }
//                 }
//             ])
//             .then(id => {
//                 console.log(id)
//                 new Employee(id)
                
//                 this.getEmail();

//             })
//     }

//     getEmail() {
//         return inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "email",
//                     message: "enter email address?",
//                     validate: function (email) {
//                         var goodEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//                         return goodEmail.test(email) || "not a valid email!";
//                     }
//                 }
//             ])
//             .then(email => {
//                 console.log(email)
//                 this.getRole();

//             })
//     }

//     getRole() {
//         return inquirer

//             .prompt([
//                 {
//                     type: "list",
//                     name: "role",
//                     message: "What is your role?",
//                     choices: [
//                         'Engineer',
//                         'Intern',
//                         'Manager',

//                     ],
//                 }
//             ])
//             .then(({ role }) => {
//                 if (role === engineer) {
//                     console.log('Yes, Engineer.')
//                     return inquirer
//                         .prompt([
//                             {
//                                 type: "input",
//                                 name: "github",
//                                 message: "What is your Github username?"
//                             }
//                         ])
//                         .then(({ github }) => {
//                             console.log(github);
//                             // engineerDetails.push({ github })
//                             const newEngineer = new Employee("ton", 88, "test@TextEncoderStream.com", role, github)
//                             console.log("what is newEngineer? " + JSON.stringify(newEngineer))
//                             // new Employee({username, id, email, title, github}).push(engineerDetails)
//                             this.askFinalQuestion();

//                         })
//                 }


//             })

//     }

//     askFinalQuestion() {
//         return inquirer.prompt([
//             {
//                 type: "confirm",
//                 name: "more",
//                 message: "do you want to add another employee?",

//             }
//         ])

//             .then(({ more }) => {
//                 if (more === true) {
//                     this.getName()
//                 }
//                 else {
//                     console.log('finished!')
//                 }

//             })


//     }


// }

module.exports = Employee;




