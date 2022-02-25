import { sayHello } from "./unit1"

describe("sayHello unit test suites", () => {
    it("should return 'Hello, Tom'", () => {
        expect(sayHello('Tom')).toBe('Hello, Tom');
    })
})

describe("sayHello unit test suites", () => {
    it("should return 'Hello, World'", () => {
        expect(sayHello()).toBe('Hello, World');
    })
})