export const getUsers = () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" }
  ];
  return users;
};

export const getUser = (id : number) => {
  const user = { id: id, name: "John Doe" };
  return user;
};