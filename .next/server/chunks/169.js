exports.id = 169;
exports.ids = [169];
exports.modules = {

/***/ 8169:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ThemeContext": function() { return /* binding */ ThemeContext; },
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "little-state-machine"
var external_little_state_machine_ = __webpack_require__(4636);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(8547);
;// CONCATENATED MODULE: ./styles/components/container.js
const Container = {
  baseStyle: {
    margin: 'auto',
    maxW: {
      lg: '1300px',
      sm: 'none'
    },
    w: '100%'
  }
};
/* harmony default export */ var container = (Container);
;// CONCATENATED MODULE: ./styles/components/button.js
const Button = {
  baseStyle: {
    padding: '5px',
    backgroundColor: 'primary',
    color: 'white',
    borderRadius: '2.5px'
  },
  variants: {
    text: {
      padding: '0px !important',
      backgroundColor: 'transparent'
    },
    transparent: {
      backgroundColor: 'transparent',
      border: '1px solid primary'
    }
  }
};
/* harmony default export */ var components_button = (Button);
;// CONCATENATED MODULE: ./styles/components/link.js
const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none'
    },
    _focus: {
      boxShadow: 'none'
    }
  },
  variants: {
    navLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: "0 20px",
      h: "100%",
      _hover: {
        backgroundColor: '#EBEDF7'
      }
    }
  }
};
/* harmony default export */ var components_link = (Link);
;// CONCATENATED MODULE: ./styles/components/input.js
const Input = {
  baseStyle: {
    padding: '5px',
    backgroundColor: 'white',
    border: '1px solid #495FBF',
    borderRadius: '3px',
    outline: '1px solid #495FBF'
  },
  variants: {
    error: {
      border: '1px solid red'
    }
  }
};
/* harmony default export */ var input = (Input);
;// CONCATENATED MODULE: ./styles/components/checkbox.js
const Checkbox = {
  baseStyle: {
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: '3px',
    colorScheme: 'red'
  },
  variants: {
    error: {
      border: '1px solid red',
      colorScheme: 'red'
    }
  }
};
/* harmony default export */ var components_checkbox = (Checkbox);
;// CONCATENATED MODULE: ./styles/components/componentStyles.js





const components = {
  Container: container,
  Button: components_button,
  Link: components_link,
  Input: input,
  Checkbox: components_checkbox
};
/* harmony default export */ var componentStyles = (components);
;// CONCATENATED MODULE: ./styles/theme.js


const theme = {
  colors: {
    primary: '#495FBF',
    secondary: '#19858F',
    mustard: '#FF7D00',
    red: '#FA1103',
    darkGreen: '#179942',
    lightGreen: '#01E4AA',
    pink: '#FD998A',
    gray: '#BFBFBF',
    grayLight: '#ebebeb',
    white: '#fff',
    black: '#000',
    bgBlue: '#DBF6F8'
  },
  fontSizes: {
    large: '3rem',
    medium: '2rem',
    regular: '1rem',
    small: '0.75rem',
    xsmall: '0.5rem'
  },
  components: componentStyles,
  breakpoints: (0,theme_tools_.createBreakpoints)({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px"
  })
};
/* harmony default export */ var styles_theme = (theme);
// EXTERNAL MODULE: ./pages/components/reUsable/header.js
var header = __webpack_require__(4999);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const themeHelper = (0,react_.extendTheme)(_objectSpread({}, styles_theme));
const ThemeContext = /*#__PURE__*/external_react_default().createContext(themeHelper);
(0,external_little_state_machine_.createStore)({
  data: {}
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_little_state_machine_.StateMachineProvider, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Paisa"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/clockLogo4x.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
      theme: themeHelper,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ThemeContext.Provider, {
        value: themeHelper,
        children: [/*#__PURE__*/jsx_runtime_.jsx(header.default, {
          h: "75px"
        }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
      })
    })]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ })

};
;