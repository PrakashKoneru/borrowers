exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8169);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);









const ApprovedLoanStatus = ({
  loan
}) => {
  if (!loan) return null;
  var moment_loan_issue_date = moment__WEBPACK_IMPORTED_MODULE_6___default()(loan.loan_issue_date, 'MMM-YY');
  var moment_current_date = moment__WEBPACK_IMPORTED_MODULE_6___default()("Sep-20", 'MMM-YY');
  const amount_due = moment_current_date.diff(moment_loan_issue_date, "months") * Number(loan.installment) - (Number(loan.total_rec_principal) + Number(loan.total_rec_interest));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_2__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
        padding: {
          md: "0px 50px",
          sm: "0px 30px"
        },
        mt: "50px",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
          flexWrap: "wrap",
          justifyContent: "space-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            w: {
              md: "48%",
              sm: "100%"
            },
            h: "300px",
            border: `1px solid ${theme.colors.gray}`,
            borderRadius: "3px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: "15px",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              textAlign: "center",
              w: "100%",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                fontSize: "18px",
                fontWeight: "600",
                children: "Balance this month"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                mt: "5px",
                color: theme.colors.darkGreen,
                fontSize: "40px",
                children: ["$", amount_due.toFixed(2)]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "15px",
              children: ["Last Payment of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                as: "span",
                fontWeight: "600",
                children: ["$", loan.last_pymnt_amnt]
              }), " was successful."]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "20px",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: ["Next Payment of $", (Number(loan.installment) + amount_due).toFixed(2), " is due on ", loan.next_pymnt_date]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            w: {
              md: "48%",
              sm: "100%"
            },
            h: "300px",
            border: `1px solid ${theme.colors.gray}`,
            borderRadius: "3px",
            flexDirection: "column",
            px: "15px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "15px",
              fontSize: "20px",
              fontWeight: "600",
              children: "Repayment Summary"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "10px",
              children: ["In ", `${moment_loan_issue_date.format("MMMM, YYYY")}`, " you got a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                as: "span",
                fontWeight: "600",
                children: ["$", loan.loan_amnt]
              }), " loan, see how far you've come!"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "20px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: ["You have paid a sum of $", loan.total_rec_principal, " towards principal"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                mt: "15px",
                bg: `${theme.colors.grayLight}`,
                h: "15px",
                w: "100%",
                borderRadius: "25px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                  mt: "15px",
                  bg: `${theme.colors.darkGreen}`,
                  h: "15px",
                  w: `${loan.total_rec_principal / loan.loan_amnt * 100}%`,
                  borderRadius: "25px"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                  textAlign: "right",
                  mt: "3px",
                  children: ["$", loan.loan_amnt]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
          mt: "30px",
          w: "100%",
          h: "300px",
          border: `1px solid ${theme.colors.gray}`,
          borderRadius: "3px"
        })]
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ApprovedLoanStatus);

/***/ })

};
;