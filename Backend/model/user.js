import db from "../config/dbConnection.js";

const newUser = async (username, password, birthday, gender, email) => {
  const [result] = await db.promise().query(
    "INSERT INTO user (username,password,email) VALUES (?,?,?)",
    [username, password, birthday, gender, email]
  );
  return result[0];
};

const deleteUser = async (userid) => {
  const [result] = await db.promise().query("DELETE FROM user WHERE userid = ?", [userid]);
  return result.affectedRows > 0;
};

const updateUser = async (userid, username, password, email) => {
  const [result] = await db.promise().query(
    "UPDATE user SET username = ?, password = ?, email = ? WHERE userid = ?",
    [username, password, email, userid]
  );
  return result[0];
};

const lookupUser = async (userid) => {
  const [result] = await db.promise().query(`SELECT * FROM user WHERE userid = ?`, [userid]);
  return result;
};

export { deleteUser, lookupUser, newUser, updateUser };

