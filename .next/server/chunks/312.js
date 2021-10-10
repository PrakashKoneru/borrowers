exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 4312:
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);







const RejectedLoanStatus = ({
  loan
}) => {
  if (!loan) return null;
  var moment_loan_issue_date = moment__WEBPACK_IMPORTED_MODULE_4___default()(loan.loan_issue_date, 'MMM-YY');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_2__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
        padding: {
          md: "0px 50px",
          sm: "0px 30px"
        },
        mt: "50px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
          flexWrap: "wrap",
          justifyContent: "space-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
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
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              textAlign: "center",
              w: "100%",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                fontSize: "18px",
                fontWeight: "600",
                children: "Loan Status"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                mt: "5px",
                color: theme.colors.red,
                fontSize: "40px",
                children: "Rejected"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
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
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              fontSize: "20px",
              fontWeight: "600",
              children: "Summary"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
              mt: "10px",
              maxWidth: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              children: ["In ", `${moment_loan_issue_date.format("MMMM, YYYY")}`, " you requested for ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                as: "span",
                fontWeight: "600",
                children: ["$", loan.loan_amnt]
              }), " loan, and it was disapproved."]
            })]
          })]
        })
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RejectedLoanStatus);

/***/ })

};
;