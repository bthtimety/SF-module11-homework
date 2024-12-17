const repeatWord = require("../src/index.js");

describe("test for repeatWord function", () => {
    it("should repeat the word 3 times", () => {
        const word = "test";
        const count = 3;
        const result = repeatWord(word, count);
        expect(result).toBe("test1, test2, test3");
    });
    it("should repeat the word 1 time", () => {
        const word = "test";
        const count = 1;
        const result = repeatWord(word, count);
        expect(result).toBe("test1");
    });
    it("should repeat the word 0 times", () => {
        const word = "test";
        const count = 0;
        const result = repeatWord(word, count);
        expect(result).toBe("");
    });
});