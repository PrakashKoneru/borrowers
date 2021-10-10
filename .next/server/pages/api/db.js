(function() {
var exports = {};
exports.id = 675;
exports.ids = [675];
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

/***/ 4723:
/***/ (function(module) {

"use strict";
module.exports = require("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4635));
module.exports = __webpack_exports__;

})();