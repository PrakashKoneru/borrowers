(function() {
var exports = {};
exports.id = 534;
exports.ids = [534,675,401,390];
exports.modules = {

/***/ 4635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const Pool = __webpack_require__(4723).Pool;

const pool = () => new Pool({
  user: process.env.user,
  password: process.env.poolPass,
  host: "localhost",
  port: 5432,
  database: process.env.db
}); // pool.end(function(err) {
// if (err) {
// 	return console.log('error:' + err.message);
// }
// console.log('Close the database connection.');
// });


module.exports = pool;

/***/ }),

/***/ 2351:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const jwt = __webpack_require__(9722);

__webpack_require__(334).config(); //this middleware will on continue on if the token is inside the local storage


module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("bToken"); // Check if not token

  if (!token) {
    return res.status(403).json({
      msg: "authorization denied"
    });
  } // Verify token


  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);
    req.user_id = verify.user.id;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid"
    });
  }
};

/***/ }),

/***/ 7889:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const router = express.Router();

const bcrypt = __webpack_require__(6552);

const pool = __webpack_require__(4635); // const validInfo = require("../middleware/validInfo");


const jwtGenerator = __webpack_require__(8088);

const authorize = __webpack_require__(2351);

router.post("/signUp", async (req, res) => {
  const {
    email,
    password,
    calculation_id
  } = req.body; // Figur out the right way to add role

  const user_role = 'borrower';

  try {
    const user = await pool().query("SELECT * FROM users WHERE user_email = $1", [email]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    let newUser = await pool().query("INSERT INTO users (user_email, user_password, user_role, calculation_id) VALUES ($1, $2, $3, $4) RETURNING *", [email, bcryptPassword, user_role, calculation_id]);
    const bToken = jwtGenerator(newUser.rows[0].user_id);
    return res.json({
      bToken
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/login", async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await pool().query("SELECT * FROM users WHERE user_email = $1", [email]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }

    const bToken = jwtGenerator(user.rows[0].user_id);
    return res.json({
      bToken
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}); // router.post("/verify", authorize, (req, res) => {
//   try {
//     res.json(true);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;

/***/ }),

/***/ 8088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const jwt = __webpack_require__(9722);

__webpack_require__(334).config();

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id
    }
  };
  return jwt.sign(payload, process.env.jwtSecret);
}

module.exports = jwtGenerator;

/***/ }),

/***/ 6552:
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 2127:
/***/ (function(module) {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 4723:
/***/ (function(module) {

"use strict";
module.exports = require("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7889));
module.exports = __webpack_exports__;

})();