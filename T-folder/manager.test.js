const Manager = require('../lib/manager');

describe("Manager class",() =>{
    it("should be instantiated", () => {
        const manager = new Manager();
        expect(typeof (manager)).toBe("object");
        expect(manager instanceof Manager).toBe(true);
    })
})