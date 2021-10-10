(function() {
var exports = {};
exports.id = 238;
exports.ids = [238,675];
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

/***/ 235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const express = __webpack_require__(2127);

const router = express.Router();

const pool = __webpack_require__(4635);

router.post("/getRate", async (req, res) => {
  try {
    const {
      ssn,
      firstName,
      lastName,
      phnNumber,
      address
    } = req.body;

    function randomIntFromInterval(min, max) {
      // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let rndInt;

    if (ssn === '001-000-0000') {
      rndInt = randomIntFromInterval(7, 9);
    } else if (ssn === '002-000-0000') {
      rndInt = randomIntFromInterval(10, 12);
    } else if (ssn === '003-000-0000') {
      rndInt = randomIntFromInterval(12, 15);
    } else if (ssn === '004-000-0000') {
      rndInt = randomIntFromInterval(16, 19);
    } else {
      rndInt = randomIntFromInterval(7, 19);
    }

    return res.json({
      intRate: `${rndInt}%`
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post("/apply", async (req, res) => {
  try {
    const {
      intRate,
      ssnCopy
    } = req.body;

    function randomIntFromInterval(min, max) {
      // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let rndInt; // if (ssn === '001-000-0000') {
    // 	rndInt = randomIntFromInterval(7, 9)
    // } else if (ssn === '002-000-0000') {
    // 	rndInt = randomIntFromInterval(10, 12)
    // } else if (ssn === '003-000-0000') {
    // 	rndInt = randomIntFromInterval(12, 15)
    // } else if (ssn === '004-000-0000') {
    // 	rndInt = randomIntFromInterval(16, 19)
    // } else {
    // 	rndInt = randomIntFromInterval(7, 19)
    // }

    const newLoan = await pool().query(`INSERT INTO loans( 
				loan_amnt,term,interest_rate_percent,installment,loan_grade,
				loan_sub_grade,emp_title,emp_length,home_ownership,annual_inc,
				verification_status,loan_issue_date,loan_status,purpose,title,zip_code,
				addr_state,dti,inq_last_6mths,open_acc,revol_bal,revol_util,total_acc,
				total_pymnt,total_rec_principal,total_rec_interest,total_rec_late_fee,
				last_pymnt_date,last_pymnt_amnt,next_pymnt_date,last_credit_pull_date,
				last_fico_range_high,last_fico_range_low,application_type,
				acc_open_past_24mths,bc_util,months_since_old_il_acct,
				months_since_old_rev_tl_op,months_since_rcnt_rev_tl_op,
				months_since_rcnt_tl,mort_acc,months_since_recent_bc,tot_hi_cred_lim,
				diff_fico_range_high_fico_range_low,avg_fico_range_high_fico_range_low,
				us_unemploy_rate_next_3yr_avg,diff_issue_date_earliest_cr_line_date_months,
				div_tot_coll_amt_tot_hi_cred_lim,div_tot_cur_bal_tot_hi_cred_lim,
				div_total_bal_ex_mort_tot_hi_cred_lim,div_total_bc_limit_tot_hi_cred_lim,
				div_total_il_high_credit_limit_tot_hi_cred_lim,div_num_actv_bc_tl_total_acc,
				div_num_actv_rev_tl_total_acc,div_num_bc_sats_total_acc,
				div_num_bc_tl_total_acc,div_num_il_tl_total_acc,div_num_op_rev_tl_total_acc,
				div_num_rev_accts_total_acc,div_num_sats_total_acc,
				div_acc_now_delinq_open_acc,div_num_accts_ever_120_pd_open_acc,
				div_num_tl_30dpd_open_acc,div_num_tl_90g_dpd_24m_open_acc,
				div_num_tl_op_past_12m_open_acc,div_delinq_2yrs_open_acc,
				div_pub_rec_total_acc,div_collections_12_mths_ex_med_open_acc,
				div_chargeoff_within_12_mths_open_acc,div_pub_rec_bankruptcies_total_acc,
				div_tax_liens_total_acc,div_delinq_amnt_tot_cur_bal,div_loan_amnt_non_revol_bal,
				div_acc_open_past_24mths_open_acc,default_probability_percent_at_issue,
				approval_status,approver_id,pending_ids,rejected_ids,borrower_id,secondary_approver_id,
				num_pymnts,loan_break_d_year,loan_break_d_month,loan_amnt_sec,loan_break_month_number,
				us_unemploy_rate_sec_half_avg,default_probability_percent_updated,num_pymnts_on_time,
				num_pymnts_late,num_pymnts_missed,total_pymnt_on_time,total_pymnt_late,total_pymnt_missed,
				late_duration_days_total,missed_duration_days_total,loan_id_lc
		 )
		 SELECT loan_amnt,term,interest_rate_percent,installment,loan_grade,
			loan_sub_grade,emp_title,emp_length,home_ownership,annual_inc,
			verification_status,loan_issue_date,loan_status,purpose,title,zip_code,
			addr_state,dti,inq_last_6mths,open_acc,revol_bal,revol_util,total_acc,
			total_pymnt,total_rec_principal,total_rec_interest,total_rec_late_fee,
			last_pymnt_date,last_pymnt_amnt,next_pymnt_date,last_credit_pull_date,
			last_fico_range_high,last_fico_range_low,application_type,
			acc_open_past_24mths,bc_util,months_since_old_il_acct,
			months_since_old_rev_tl_op,months_since_rcnt_rev_tl_op,
			months_since_rcnt_tl,mort_acc,months_since_recent_bc,tot_hi_cred_lim,
			diff_fico_range_high_fico_range_low,avg_fico_range_high_fico_range_low,
			us_unemploy_rate_next_3yr_avg,diff_issue_date_earliest_cr_line_date_months,
			div_tot_coll_amt_tot_hi_cred_lim,div_tot_cur_bal_tot_hi_cred_lim,
			div_total_bal_ex_mort_tot_hi_cred_lim,div_total_bc_limit_tot_hi_cred_lim,
			div_total_il_high_credit_limit_tot_hi_cred_lim,div_num_actv_bc_tl_total_acc,
			div_num_actv_rev_tl_total_acc,div_num_bc_sats_total_acc,
			div_num_bc_tl_total_acc,div_num_il_tl_total_acc,div_num_op_rev_tl_total_acc,
			div_num_rev_accts_total_acc,div_num_sats_total_acc,
			div_acc_now_delinq_open_acc,div_num_accts_ever_120_pd_open_acc,
			div_num_tl_30dpd_open_acc,div_num_tl_90g_dpd_24m_open_acc,
			div_num_tl_op_past_12m_open_acc,div_delinq_2yrs_open_acc,
			div_pub_rec_total_acc,div_collections_12_mths_ex_med_open_acc,
			div_chargeoff_within_12_mths_open_acc,div_pub_rec_bankruptcies_total_acc,
			div_tax_liens_total_acc,div_delinq_amnt_tot_cur_bal,div_loan_amnt_non_revol_bal,
			div_acc_open_past_24mths_open_acc,default_probability_percent_at_issue,
			approval_status,approver_id,pending_ids,rejected_ids,borrower_id,secondary_approver_id,
			num_pymnts,loan_break_d_year,loan_break_d_month,loan_amnt_sec,loan_break_month_number,
			us_unemploy_rate_sec_half_avg,default_probability_percent_updated,num_pymnts_on_time,
			num_pymnts_late,num_pymnts_missed,total_pymnt_on_time,total_pymnt_late,total_pymnt_missed,
			late_duration_days_total,missed_duration_days_total,loan_id_lc	
			FROM loans WHERE loan_id=$1 
			RETURNING *
		 `, ['6996728d-8cde-4c3e-8808-08b892020754']);
    const newLoanId = newLoan.rows[0].loan_id;
    pool().query('UPDATE loans SET borrower_id = $1, approval_status = $2 WHERE loan_id = $3 RETURNING *', [req.user_id, 'pending', newLoanId], async (error, results) => {
      if (error) {
        throw error;
      }

      return res.json({
        loan: results.rows[0]
      });
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
var __webpack_exports__ = (__webpack_exec__(235));
module.exports = __webpack_exports__;

})();