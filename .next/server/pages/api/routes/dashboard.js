(function() {
var exports = {};
exports.id = 68;
exports.ids = [68,675];
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

/***/ 5500:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const router = express.Router();

const pool = __webpack_require__(4635);

router.get("/", async (req, res) => {
  try {
    const loans = await pool().query("SELECT * FROM loans WHERE borrower_id = $1", [req.user_id]);
    return res.json({
      loans: loans.rows[0]
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;

/***/ }),

/***/ 2127:
/***/ (function(module) {

"use strict";
module.exports = require("express");;

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
var __webpack_exports__ = (__webpack_exec__(5500));
module.exports = __webpack_exports__;

})();