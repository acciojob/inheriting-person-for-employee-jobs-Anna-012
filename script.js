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
});
