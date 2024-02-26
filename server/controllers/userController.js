// CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255) UNIQUE NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW()
// );

const db = require('../models/dbModels.js');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const query = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');`;
  db.query(query)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => next(err));
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;
  db.query(query)
    .then((data) => {
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

userController.updateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const query = `UPDATE users SET email = '${email}', password = '${password}' WHERE username = '${username}';`;
  db.query(query)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => next(err));
};

userController.deleteUser = (req, res, next) => {
  const { username } = req.body;
  const query = `DELETE FROM users WHERE username = '${username}';`;
  db.query(query)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => next(err));
};

userController.getAllUsers = (req, res, next) => {
  const query = 'SELECT * FROM users;';
  db.query(query)
    .then((data) => {
      res.locals.users = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

userController.getUserById = (req, res, next) => {
  const { id } = req.body;
  const query = `SELECT * FROM users WHERE id = ${id};`;
  db.query(query)
    .then((data) => {
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err) => next(err));
};

module.exports = userController;
