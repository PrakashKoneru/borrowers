exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 4735:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8169);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const SsnApplication = (_ref) => {
  let {
    setLoans
  } = _ref,
      props = _objectWithoutProperties(_ref, ["setLoans"]);

  const {
    0: intRate,
    1: setIntRate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: ssnCopy,
    1: setSsnCopy
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();

  const postSsnData = ({
    ssn,
    firstName,
    lastName,
    phnNumber,
    address
  }) => {
    const envUrl = '/borrowers/loanApplication/getRate';
    setSsnCopy(ssn);
    axios__WEBPACK_IMPORTED_MODULE_2___default().post(envUrl, {
      ssn,
      firstName,
      lastName,
      phnNumber,
      address
    }, {
      headers: {
        bToken: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get('bToken')
      }
    }).then(({
      data: {
        intRate
      }
    }) => {
      setIntRate(intRate);
    });
  };

  const applyForLoan = () => {
    const envUrl = '/borrowers/loanApplication/apply';
    axios__WEBPACK_IMPORTED_MODULE_2___default().post(envUrl, {
      intRate,
      ssnCopy
    }, {
      headers: {
        bToken: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get('bToken')
      }
    }).then(({
      data: {
        loan
      }
    }) => {
      setLoans(loan);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app__WEBPACK_IMPORTED_MODULE_3__.ThemeContext.Consumer, {
    children: theme => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
        padding: {
          md: "0px 50px",
          sm: "0px 30px"
        },
        bg: theme.colors.bgBlue,
        children: intRate ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
          onSubmit: handleSubmit(applyForLoan),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
            id: "loanFlex",
            bg: theme.colors.bgBlue,
            h: "calc(100vh - 75px)",
            w: "100%",
            alignItems: "center",
            justifyContent: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
              id: "box",
              bg: "white",
              border: `0.3px solid ${theme.colors.secondary}`,
              borderRadius: "3px",
              minWidth: {
                sm: "325px",
                md: "600px"
              },
              maxW: "600px",
              minHeight: {
                sm: "400px",
                md: "350px",
                lg: "400px"
              },
              w: {
                sm: "100%",
                md: "auto"
              },
              py: "30px",
              px: "20px",
              my: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                fontSize: "30px",
                px: "10px",
                children: ["Based on your credit profile your interest rate for a loan will be ", intRate, "."]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                mt: "30px",
                justifyContent: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  fontSize: "18px",
                  py: "25px",
                  px: "20px",
                  type: "submit",
                  children: "Apply Now"
                })
              })]
            })
          }, Math.random())
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
          onSubmit: handleSubmit(postSsnData),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
            id: "loanFlex",
            bg: theme.colors.bgBlue,
            h: "calc(100vh - 75px)",
            w: "100%",
            alignItems: "center",
            justifyContent: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
              id: "box",
              bg: "white",
              border: `0.3px solid ${theme.colors.secondary}`,
              borderRadius: "3px",
              minWidth: {
                sm: "325px",
                md: "600px"
              },
              maxW: "600px",
              minHeight: {
                sm: "400px",
                md: "350px",
                lg: "400px"
              },
              w: {
                sm: "100%",
                md: "auto"
              },
              py: "30px",
              px: "20px",
              my: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                fontSize: "40px",
                children: "Get a Decision On your Loan"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                mt: "15px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _objectSpread({
                  type: "number",
                  mt: "5px",
                  placeholder: "SSN"
                }, register("ssn", {
                  required: true,
                  validate: value => value.toString().length === 9
                }))), errors.ssn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  color: theme.colors.red,
                  children: "Please enter a valid 9 digit SSN."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                mt: "10px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _objectSpread({
                  type: "text",
                  mt: "5px",
                  placeholder: "First Name"
                }, register("firstName", {
                  required: true
                }))), errors.firstName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  color: theme.colors.red,
                  children: "Please enter a valid First Name."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                mt: "10px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _objectSpread({
                  type: "text",
                  mt: "5px",
                  placeholder: "Last Name"
                }, register("lastName", {
                  required: true
                }))), errors.lastName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  color: theme.colors.red,
                  children: "Please enter a valid Last Name."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                mt: "10px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _objectSpread({
                  type: "number",
                  mt: "5px",
                  placeholder: "Phone"
                }, register("phnNumber", {
                  required: true,
                  validate: value => value.toString().length === 10
                }))), errors.phnNumber && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  color: theme.colors.red,
                  children: "Please enter a valid 10 digit Phone Number."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                mt: "10px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, _objectSpread({
                  type: "text",
                  mt: "5px",
                  placeholder: "Address"
                }, register("address", {
                  required: true
                }))), errors.address && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  color: theme.colors.red,
                  children: "Please enter a valid Address."
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                mt: "25px",
                justifyContent: "flex-end",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  w: "150px",
                  type: "submit",
                  children: "Get Interest Rate"
                })
              })]
            })
          }, Math.random())
        })
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SsnApplication);

/***/ })

};
;