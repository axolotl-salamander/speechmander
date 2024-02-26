const db = require('../models/dbModels.js');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = async (req, res, next) => {
  if (req.cookies) {
    try {
      const sessFinder = await db.query(
        'SELECT * FROM session_cookies WHERE cookie_id = $1',
        [req.cookies.SSID]
      );

      if (sessFinder.rows.length > 0) {
        res.locals.isLoggedIn = true;
      } else {
        res.locals.isLoggedIn = false;
      }
      return next();
    } catch (err) {
      return next(err);
    }
  } else {
    return next();
  }
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  if (req.cookies.ssid) {
    if (res.locals.isLoggedIn) {
      db.query('INSERT INTO session_cookies (cookie_id) VALUES ($1)', [
        req.cookies.ssid,
      ]);
      return next();
    } else if (res.locals.id) {
      db.query('INSERT INTO session_cookies (cookie_id) VALUES ($1)', [
        req.cookies.ssid,
      ]);
      return next();
    }
  } else {
    return next();
  }
};

module.exports = sessionController;
