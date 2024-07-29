import { getUser, getUsers } from "./userService";

describe("User", () => {
  it("get user", () => {
    const user = getUser(1);
    expect(user.name).toBe("John Doe");
  });

  it("get users", () => {
    const users = getUsers();
    expect(users).toHaveLength(2);
  });
});