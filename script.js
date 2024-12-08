// complete this js code
// Define the Person constructor function
// Define the Person class
// Define the Person class
// Import the classes using CommonJS syntax
const { Person, Employee } = require('../../../Person');

describe("Person and Employee Classes", () => {
    it("should create a Person and call greet", () => {
        const person = new Person("Alice", 25);
        cy.spy(console, "log");
        person.greet();
        expect(console.log).to.have.been.calledWith("Hello, my name is Alice, I am 25 years old.");
    });

    it("should create an Employee and call jobGreet", () => {
        const employee = new Employee("Bob", 30, "Manager");
        cy.spy(console, "log");
        employee.jobGreet();
        expect(console.log).to.have.been.calledWith(
            "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
        );
    });


	// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define the Employee class that extends the Person class
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the constructor of the parent class
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Export the classes using CommonJS syntax
module.exports = { Person, Employee };

	const { Person, Employee } = require('../../../Person'); // Adjust the path as per your folder structure

describe("Person and Employee Classes", () => {
    it("should create a Person and call greet", () => {
        const person = new Persohttps://www.svgrepo.com/show/345221/three-dots.svgn("Alice", 25); // Create an instance of Person
        cy.spy(console, "log"); // Spy on console.log
        person.greet(); // Call the greet method
        expect(console.log).to.have.been.calledWith("Hello, my name is Alice, I am 25 years old."); // Assert output
    });

    it("should create an Employee and call jobGreet", () => {
        const employee = new Employee("Bob", 30, "Manager"); // Create an instance of Employee
        cy.spy(console, "log"); // Spy on console.log
        employee.jobGreet(); // Call the jobGreet method
        expect(console.log).to.have.been.calledWith(
            "Hello, my name is Bob, I am 30 years old, and my job title is Manager." // Assert output
        );
    });
});


