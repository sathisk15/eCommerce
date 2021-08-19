import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("a", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("a", 10),
    isAdmin: true,
  },
  {
    name: "Sara Smith",
    email: "sara@example.com",
    password: bcrypt.hashSync("a", 10),
    isAdmin: true,
  },
];

export default users;
