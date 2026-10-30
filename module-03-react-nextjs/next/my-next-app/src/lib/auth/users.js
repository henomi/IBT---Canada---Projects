
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// const currentDirectory = path.dirname(
//   fileURLToPath(import.meta.url)
// );

// const usersFile = path.resolve(
//   currentDirectory,
//   "../../../../data/users.json"
// );

const usersFile = path.join(
  process.cwd(),
  "data",
  "users.json"
);

export async function getUsers() {
  const file = await readFile(usersFile, "utf8");
  const data = JSON.parse(file);

  return data.users;
}

export async function findUserByEmail(email) {
  const users = await getUsers();

  return (
    users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase()
    ) ?? null
  );
}

export async function createUser(user) {
  const file = await readFile(usersFile, "utf8");
  const data = JSON.parse(file);

  const existingUser = data.users.find(
    (item) =>
      item.email.toLowerCase() === user.email.toLowerCase()
  );

  if (existingUser) {
    throw new Error("EMAIL_ALREADY_EXISTS");
  }

  data.users.push(user);

  await writeFile(
    usersFile,
    JSON.stringify(data, null, 2),
    "utf8"
  );

  return user;
}
