const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
const App = require('./../app.js')

class Engineer {
    constructor(name, id, email, title, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
        this.role = role;
        this.github = "GitHubUser";
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
        return "Engineer";
    }

    getGithub() {
        return "GitHubUser";
    }
}

module.exports = Engineer; 