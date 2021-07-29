const Employee = require('../lib/employee');

describe("Employee class",() =>{
    it("should be instantiated", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    })
    it("should have a name property that can be set on instantination", () => {
        const employee = new Employee("liam", "1", "email@email.com");
        expect(employee.name).toBe("liam");
        expect(employee instanceof Employee).toBe(true);
    })
    it("should have a id property that can be set on instantination", () => {
        const employee = new Employee("liam", "1", "email@email.com");
        expect(employee.id).toBe("1");
        expect(employee instanceof Employee).toBe(true);
    })
    it("should have a email property that can be set on instantination", () => {
        const employee = new Employee("liam", "1", "email@email.com");
        expect(employee.email).toBe("email@email.com");
        expect(employee instanceof Employee).toBe(true);
    })
})