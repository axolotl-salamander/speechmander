// CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255) UNIQUE NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW()
// );

const express = require('express');

const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.createUser, (req, res) => {
  res.status(200).send('user created!');
});

router.post('/verify', userController.verifyUser, (req, res) => {
  res.status(200).send(res.locals.user);
});

router.patch('/update', userController.updateUser, (req, res) => {
  res.status(200).send('user updated!');
});

router.delete('/delete', userController.deleteUser, (req, res) => {
  res.status(200).send('user deleted!');
});

router.get('/all', userController.getAllUsers, (req, res) => {
  res.status(200).send(res.locals.users);
});

module.exports = router;
