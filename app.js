const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");

function validateName(name) {
    return name !== "";

}

function validateID(id) {
    var reg = /^\d+$/;
    return reg.test(id) || "ID should be a number!";
}

function validatePhone(phone) {
    var reg = /^\d{2}$/;
    return reg.test(phone) || "needs to be 2 numbers long!";
}


function ValidateEmail(email) {
    var goodEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return goodEmail.test(email) || "not a valid email!";

}

let engineer = 'Engineer';
let intern = 'Intern';
let manager = 'Manager';

const employeeQuestions = [
    {
        type: "input",
        name: "username",
        message: "What is your name?",
        validate: validateName,
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?",
        validate: validateID,
    },
    {
        type: "list",
        name: "title",
        message: "What is your title?",
        choices: [
            "Mr",
            "Mrs",
            "Dr",
            "Ms"
        ],
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: ValidateEmail,
    },
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: [
            engineer,
            intern,
            manager,
        ],
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    }
]

const managerQuestions = [
    {
        type: "input",
        name: "phone",
        message: "What is your office phone?",
        validate: validatePhone,
    }
]
const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school do you go to?"
    }
]

const loopQuestion = [
    {
        type: "confirm",
        name: "more",
        message: "do you want to add another employee?"
    }


]


inquirer
    .prompt(employeeQuestions)
    .then(({ role }) => {
        // console.log(role, engineer, role === engineer) ;
        if (role === engineer) {
            console.log('Yes, Engineer.')
            inquirer
                .prompt(engineerQuestions)
                .then(({ github }) => {
                    console.log(github);
                    finalQuestion();
                })
        }
        else if (role === intern) {
            console.log("you're an intern");
            inquirer
                .prompt(internQuestions)
                .then(({ school }) => {
                    console.log(school);
                    finalQuestion();
                    
                })
        }
        else if (role === manager) {
            console.log("you're a manager");
            inquirer
                .prompt(managerQuestions)
                .then(({ phone }) => {
                    console.log(phone);
                    finalQuestion();
                })
        }
    })

    function finalQuestion(){
        inquirer.prompt(loopQuestion)
        .then(({ more }) => {
        if (more === true) {
            inquirer.prompt(employeeQuestions)
    
        } else {
            console.log("finished!");
        }
    })
    }

    
    





module.exports = {

}

