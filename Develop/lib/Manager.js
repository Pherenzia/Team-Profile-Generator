const inquirer = require("inquirer");
const fs = require("fs").promises;

//const {name: , id, email, officeNumber} = manager;

class Manager {
    constructor(name, id, email, officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = officeNumber;
        this.role = role
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

  function addCar() {
    // TODO: prompt user for car properties and create car instance.
    return inquirer
      .prompt([
        {
          name: "make",
          type: "input",
          message: "Enter the car's make:",
        },
        {
          name: "model",
          type: "input",
          message: "Enter the car's model:",
        },
        {
          name: "color",
          type: "input",
          message: "Enter the car's color:",
        },
        {
          name: "doors",
          type: "input",
          message: "How many doors?",
        },
      ])
      .then((answers) => {
        cars.push(
          new Car(answers.make, answers.model, answers.color, answers.doors)
        );
        return getNextType();
      });
  }


  
function getOfficeNumber() {
    this.officeNumber
}
function getRole() {
    this.role
}


managerInput();
//getOfficeNumber();
//getRole();


  module.exports = Manager, getOfficeNumber, getRole, managerInput
  
  