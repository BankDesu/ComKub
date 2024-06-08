import db from "../config/dbConnection.js";

const newUser = async (username, password, birthday, gender, email) => {
  const newUser = await db
    .promise()
    .query(
      "INSERT INTO user (username,password,birthday,gender,email) VALUES (?,?,?,?,?) RETURNING *",
      [username, password, birthday, gender, email]
    );
  return newCPU["row"][0];
};

const deleteUser = async (userid) => {
  const user = await db
    .promise()
    .query("DELETE FROM user WHERE userid = ?", [userid]);
  return deletedCPU["row"][0];
};

const updateUser = async (userid, username, password, email) => {
  const user = await db
    .promise()
    .query(
      "UPDATE user SET username = ?, password = ?, email = ? WHERE userid = ? RETURNING *",
      [username, password, email, userid]
    );
  return updatedCPU["row"][0];
};

const lookupUser = async (uid) => {
  const user = await db
    .promise()
    .query(`SELECT * FROM users WHERE userid = ?`, [userid]);
  return user["rows"];
};

export { deleteUser, lookupUser, newUser, updateUser };
