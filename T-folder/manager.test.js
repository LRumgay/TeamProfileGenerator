const Manager = require('../lib/manager');

describe("Manager class",() =>{
    it("should be instantiated", () => {
        const manager = new Manager();
        expect(typeof (manager)).toBe("object");
        expect(manager instanceof Manager).toBe(true);
    })
    it("should have a office number property that can be set on instantination", () => {
        const manager = new Manager("liam", "1", "email@email.com");
        expect(manager.id).toBe("1");
        expect(manager instanceof Manager).toBe(true);
    })
})