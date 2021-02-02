const Engineer = require("../lib/Engineer");

test("Can set Employee GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jack", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\" obj", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jack", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jack", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
