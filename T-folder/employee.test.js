const Employee = require('../lib/employee');

describe("Employee class",() =>{
    it("should be instantiated", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    })
})