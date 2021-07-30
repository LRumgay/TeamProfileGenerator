const Intern = require('../lib/intern');

describe("Intern class",() =>{
    it("should be instantiated", () => {
        const intern = new Intern();
        expect(typeof (intern)).toBe("object");
        expect(intern instanceof Intern).toBe(true);
    })
    it("should have a school property that can be set on instantination", () => {
        const intern = new Intern("liam", "1", "email@email.com");
        expect(intern.name).toBe("liam");
        expect(intern instanceof Intern).toBe(true);
    })
})