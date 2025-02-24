//Task 1: Creating an Employee Class
class Employee {
    constructor(name,id,department,salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary =salary;
    };
    getDetails() {
        return `Name of the Employee: ${this.name}, ID: ${this.id},
        department: ${this.department},salary: ${this.salary}`
        };
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}; // //Create a class Employee with methods getDetails() and calculateAnnualSalary()

const employee1 = new Employee("Alice Johnson", 101, "Sales", 5000);
//// Instantiated an employee object

console.log(employee1.getDetails());
console.log(employee1.calculateAnnualSalary());
//logged its details to the console

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize; // add teamSize as new property
    }; 
    getDetails() {   // Override getDetails() to include the team size.
        return `Manager's name: ${this.name}, ID: ${this.id}, department: ${this.department},salary: ${this.salary}, team size: ${this.teamSize}`;
    }
    calculateBonus() { //Added a method calculateBonus() that returns 10% of the manager’s annual salary.
        return this.salary * 12 * 0.10;
    }
};//Created a Manager class that extends Employee.

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());

console.log(mgr1.calculateBonus()); 




 