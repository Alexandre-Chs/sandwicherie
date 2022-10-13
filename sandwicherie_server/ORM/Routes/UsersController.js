import { User } from "../../ORM/Table.js";

export async function getUsers(req, res) {
  const users = await User.findAll();
  res.json({ data: users });
}

export async function postUsers(req, res) {
  User.create(req.body).then((element) => {
    res.json({ data: element });
  });
}
