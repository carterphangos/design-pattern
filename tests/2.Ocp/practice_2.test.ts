import { FullTimeEmployee, PartTimeEmployee, InternEmployee, FreelancerEmployee } from '../../Solid/2.Ocp/main';

describe('Employee Salary Calculation', () => {
    test('should calculate salary for full-time employees', () => {
        const employee = new FullTimeEmployee("Alice");
        expect(employee.calculateSalary()).toBe(5000);
    });

    test('should calculate salary for part-time employees', () => {
        const employee = new PartTimeEmployee("Bob");
        expect(employee.calculateSalary()).toBe(3000);
    });

    test('should calculate salary for intern employees', () => {
        const employee = new InternEmployee("Charlie");
        expect(employee.calculateSalary()).toBe(1000);
    });

    test('should calculate salary for freelancer employees', () => {
        const employee = new FreelancerEmployee("David", 160);
        expect(employee.calculateSalary()).toBe(6400);
    });
});