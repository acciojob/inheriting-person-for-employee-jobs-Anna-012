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

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

	'person.js'
const { Person, Employee } = require('./person.js'); 

test('Person can greet', () => {
    const person = new Person('Alice', 25);
    const consoleSpy = jest.spyOn(console, 'log');
    person.greet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, my name is Alice, I am 25 years old.');
});

test('Employee can greet and jobGreet', () => {
    const employee = new Employee('Bob', 30, 'Manager');
    const consoleSpy = jest.spyOn(console, 'log');
    employee.greet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, my name is Bob, I am 30 years old.');
    employee.jobGreet();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
});