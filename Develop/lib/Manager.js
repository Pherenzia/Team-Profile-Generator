const inquirer = require("inquirer");
const fs = require("fs").promises;

//const {name: , id, email, officeNumber} = manager;
const engineers = [];
const interns = [];

class Manager {
    constructor(name, id, email, officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = officeNumber;
        this.role = role
    }
}

class Engineer {
    constructor(name, id, email, github,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
    }
}

function managerInput() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Manager's name",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Manager's employee ID",
          name: "id",
        },
        {
            type:'input',
            message: "Enter Manager's email address",
            name: 'email'
        },
        {
            type: 'input',
            message: "Enter Manager's office number",
            name: 'officeNumber',
        },
        {
            type: 'list',
            message: 'Confirm your role',
            choices: ['Manager', 'Not the Manager'],
            name: 'role'
        },
      ])
      .then((answers) => {
          Manager = answers;
        // manager.name = answers.name;
        // manager.id = answers.id;
        // manager.email = answers.email
        // manager.officeNumber = answers.officeNumber
        console.log(Manager)
        console.log(Manager.role)

        return nextMember();
    });
}

function nextMember() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Choose an employee",
          name: "next",
          choices: ["Engineer", "Intern", "Finished"],
        },
      ])
      .then((answers) => {
        switch (answers.next) {
          case "Engineer":
            return addEngineer();
  
          case "Intern":
            return addIntern();
  
          default:
            return renderListing();
        }
      });
  }

  function addEngineer() {
    // TODO: prompt user for car properties and create car instance.
    return inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Enter the Engineer's name:",
        },
        {
          name: "id",
          type: "input",
          message: "Enter the Engineer's id:",
        },
        {
          name: "email",
          type: "input",
          message: "Enter the Engineer's email:",
        },
        {
          name: "github",
          type: "input",
          message: "Enter the Engineer's github username:",
        },
      ])
      .then((answers) => {
        engineers.push(
          new Engineer(answers.name, answers.id, answers.email, answers.github)
        );
        return nextMember();
      });
  }
function addIntern() {
    // TODO: prompt user for car properties and create car instance.
    return inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Enter the Intern's name:",
        },
        {
          name: "id",
          type: "input",
          message: "Enter the Intern's id:",
        },
        {
          name: "email",
          type: "input",
          message: "Enter the Intern's email:",
        },
        {
          name: "school",
          type: "input",
          message: "What school did the intern attend?",
        },
      ])
      .then((answers) => {
        interns.push(
          new Intern(answers.name, answers.id, answers.email, answers.school)
        );
        return getNextType();
      });
  }



managerInput();
//getOfficeNumber();
//getRole();


  module.exports = Manager
  
  