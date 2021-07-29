const Engineer = require('../lib/engineer');

describe("Engineer class",() =>{
    it("should be instantiated", () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe("object");
        expect(engineer instanceof Engineer).toBe(true);
    })
})