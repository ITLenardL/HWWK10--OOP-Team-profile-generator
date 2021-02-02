const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set Employee name", () => {
  const name = "Jack";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set Employee id number", () => {
  const testValue = 100;
  const e = new Employee("Jack", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set Employee email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Jack", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can retrieve name via getName()", () => {
  const testValue = "Jack";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can retrieve id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Jack", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can retrieve email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\" object", () => {
  const testValue = "Employee";
  const e = new Employee("Jack", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
