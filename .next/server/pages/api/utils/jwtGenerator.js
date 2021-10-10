(function() {
var exports = {};
exports.id = 390;
exports.ids = [390];
exports.modules = {

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

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8088));
module.exports = __webpack_exports__;

})();