const Intern = require('../lib/intern');

describe("Intern class",() =>{
    it("should be instantiated", () => {
        const intern = new Intern();
        expect(typeof (intern)).toBe("object");
        expect(intern instanceof Intern).toBe(true);
    })
})