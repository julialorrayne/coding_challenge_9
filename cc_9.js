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


 