const db = require('../models/dbModels.js');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const { username } = req.body;

  // SQL query to find the user ID from the username
  const query = `SELECT id FROM users WHERE username = '${username}'`;

  db.query(query, (err, result) => {
    if (err) {
      // Handle the error
      console.error(err);
      return next(err);
    }

    if (result.length === 0) {
      // User not found
      return res.status(404).json({ error: 'User not found' });
    }

    const id = result[0].id;

    // console.log(id);
    res.cookie('ssid', id);
    return next();
  });
};

module.exports = cookieController;
