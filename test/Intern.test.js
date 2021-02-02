const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Harvard";
  const e = new Intern("Jack", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jack", 1, "test@test.com", "Harvard");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Hardvard";
  const e = new Intern("Jack", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
