// complete this js code
// Define the Person constructor function
// Define the Person class
// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define the Employee class that extends Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent class constructor
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method for job-specific greeting
    jobGreet() {
        console.log(
            `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
        );
    }
}

// Export the classes for use in tests
export { Person, Employee };
