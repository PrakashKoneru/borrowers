(function() {
var exports = {};
exports.id = 349;
exports.ids = [349,675];
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

/***/ 8726:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const router = express.Router();

const pool = __webpack_require__(4635);

router.post("/", async (req, res) => {
  try {
    const {
      loan_amount,
      loan_purpose,
      age,
      zip_code,
      highest_education_level,
      income_primary_source,
      employment_type,
      primary_annual_income,
      income_from_other_sources,
      secondary_annual_income,
      outstanding_credit_balance,
      outstanding_other_loan_balance,
      savings
    } = req.body;
    let newScore = await pool().query(`INSERT INTO score_calculations (
				loan_amount,
				loan_purpose,
				age,
				zip_code,
				highest_education_level,
				income_primary_source,
				employment_type,
				primary_annual_income,
				income_from_other_sources,
				secondary_annual_income,
				outstanding_credit_balance,
				outstanding_other_loan_balance,
				savings) VALUES (
				$1,
				$2,
				$3,
				$4,
				$5,
				$6,
				$7,
				$8,
				$9,
				$10,
				$11,
				$12,
				$13
			)
			RETURNING *`, [loan_amount, loan_purpose, age, zip_code, highest_education_level, income_primary_source, employment_type, primary_annual_income, income_from_other_sources, secondary_annual_income, outstanding_credit_balance, outstanding_other_loan_balance, savings]);

    function randomIntFromInterval(min, max) {
      // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let rndInt = randomIntFromInterval(8, 18);
    const intRange = `${rndInt - 1}% - ${rndInt + 1}%`;
    const loanRange = `$${Number(loan_amount) - 500} - $${Number(loan_amount) + 500}`;
    return res.json({
      calculationId: newScore.rows[0].calculation_id,
      intRange,
      loanRange
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
var __webpack_exports__ = (__webpack_exec__(8726));
module.exports = __webpack_exports__;

})();