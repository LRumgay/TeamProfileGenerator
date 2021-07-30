const Engineer = require('../lib/engineer');

describe("Engineer class",() =>{
    it("should be instantiated", () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe("object");
        expect(engineer instanceof Engineer).toBe(true);
    })
    it("should have a GitHub property that can be set on instantination", () => {
        const engineer = new Engineer("liam", "1", "email@email.com");
        expect(engineer.name).toBe("liam");
        expect(engineer instanceof Engineer).toBe(true);
    })

})