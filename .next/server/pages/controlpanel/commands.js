(function() {
var exports = {};
exports.id = "pages/controlpanel/commands";
exports.ids = ["pages/controlpanel/commands"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['elevation', 'outlined'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Paper__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Table/Table.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Table/Table.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _TableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableContext */ "./node_modules/@material-ui/core/esm/Table/TableContext.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'table',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      '& caption': (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body2, {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        textAlign: 'left',
        captionSide: 'bottom'
      })
    },

    /* Styles applied to the root element if `stickyHeader={true}`. */
    stickyHeader: {
      borderCollapse: 'separate'
    }
  };
};
var defaultComponent = 'table';
var Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Table(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? 'default' : _props$padding,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$stickyHeader = props.stickyHeader,
      stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "padding", "size", "stickyHeader"]);

  var table = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return {
      padding: padding,
      size: size,
      stickyHeader: stickyHeader
    };
  }, [padding, size, stickyHeader]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_TableContext__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: table
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    role: Component === defaultComponent ? null : 'table',
    ref: ref,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, stickyHeader && classes.stickyHeader)
  }, other)));
});
 true ? Table.propTypes = {
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Allows TableCells to inherit padding of the Table.
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'checkbox', 'none']),

  /**
   * Allows TableCells to inherit size of the Table.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['small', 'medium']),

  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE 11.
   */
  stickyHeader: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTable'
})(Table));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Table/TableContext.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Table/TableContext.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var TableContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  TableContext.displayName = 'TableContext';
}

/* harmony default export */ __webpack_exports__["default"] = (TableContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var Tablelvl2Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  Tablelvl2Context.displayName = 'Tablelvl2Context';
}

/* harmony default export */ __webpack_exports__["default"] = (Tablelvl2Context);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Table/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Table/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableBody/TableBody.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-row-group'
  }
};
var tablelvl2 = {
  variant: 'body'
};
var defaultComponent = 'tbody';
var TableBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableBody(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: tablelvl2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
 true ? TableBody.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTableBody'
})(TableBody));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableBody/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableBody/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TableBody__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TableBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableCell/TableCell.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Table/TableContext */ "./node_modules/@material-ui/core/esm/Table/TableContext.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.fade)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.fade)(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_6__.default);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_7__.default);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'default');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: ref,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(align))], padding !== 'default' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 true ? TableCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The table cell contents.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value (`default`).
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['checkbox', 'default', 'none']),

  /**
   * Set scope attribute.
   */
  scope: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Specify the size of the cell.
   * By default, the Table parent component set the value (`medium`).
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Set aria-sort direction.
   */
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['asc', 'desc', false]),

  /**
   * Specify the cell type.
   * By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['body', 'footer', 'head'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableCell/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableCell/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TableCell__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableCell */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    overflowX: 'auto'
  }
};
var TableContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableContainer(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className)
  }, other));
});
 true ? TableContainer.propTypes = {
  /**
   * The table itself, normally `<Table />`
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiTableContainer'
})(TableContainer));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableContainer/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableContainer/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TableContainer__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TableContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableHead/TableHead.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-header-group'
  }
};
var tablelvl2 = {
  variant: 'head'
};
var defaultComponent = 'thead';
var TableHead = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableHead(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: tablelvl2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
    ref: ref,
    role: Component === defaultComponent ? null : 'rowgroup'
  }, other)));
});
 true ? TableHead.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiTableHead'
})(TableHead));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableHead/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableHead/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TableHead__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TableHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableHead */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableRow/TableRow.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Table/Tablelvl2Context */ "./node_modules/@material-ui/core/esm/Table/Tablelvl2Context.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: 'inherit',
      display: 'table-row',
      verticalAlign: 'middle',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      '&$hover:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected, &$selected:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.fade)(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Pseudo-class applied to the root element if `hover={true}`. */
    hover: {},

    /* Styles applied to the root element if table variant="head". */
    head: {},

    /* Styles applied to the root element if table variant="footer". */
    footer: {}
  };
};
var defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

var TableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableRow(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? defaultComponent : _props$component,
      _props$hover = props.hover,
      hover = _props$hover === void 0 ? false : _props$hover,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "component", "hover", "selected"]);

  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_6__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: ref,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, tablelvl2 && {
      'head': classes.head,
      'footer': classes.footer
    }[tablelvl2.variant], hover && classes.hover, selected && classes.selected),
    role: Component === defaultComponent ? null : 'row'
  }, other));
});
 true ? TableRow.propTypes = {
  /**
   * Should be valid <tr> children such as `TableCell`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the table row will shade on hover.
   */
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the table row will have the selected shading.
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiTableRow'
})(TableRow));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TableRow/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TableRow/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TableRow__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableRow */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": function() { return /* binding */ hexToRgb; },
/* harmony export */   "rgbToHex": function() { return /* binding */ rgbToHex; },
/* harmony export */   "hslToRgb": function() { return /* binding */ hslToRgb; },
/* harmony export */   "decomposeColor": function() { return /* binding */ decomposeColor; },
/* harmony export */   "recomposeColor": function() { return /* binding */ recomposeColor; },
/* harmony export */   "getContrastRatio": function() { return /* binding */ getContrastRatio; },
/* harmony export */   "getLuminance": function() { return /* binding */ getLuminance; },
/* harmony export */   "emphasize": function() { return /* binding */ emphasize; },
/* harmony export */   "fade": function() { return /* binding */ fade; },
/* harmony export */   "darken": function() { return /* binding */ darken; },
/* harmony export */   "lighten": function() { return /* binding */ lighten; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": function() { return /* binding */ keys; },
/* harmony export */   "default": function() { return /* binding */ createBreakpoints; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMixins; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: Theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMuiStrictModeTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

/* harmony default export */ __webpack_exports__["default"] = (createMuiTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": function() { return /* binding */ light; },
/* harmony export */   "dark": function() { return /* binding */ dark; },
/* harmony export */   "default": function() { return /* binding */ createPalette; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createMuiTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createMuiTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSpacing; }
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createTypography; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: round,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": function() { return /* binding */ isUnitless; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "toUnitless": function() { return /* binding */ toUnitless; },
/* harmony export */   "convertLength": function() { return /* binding */ convertLength; },
/* harmony export */   "alignProperty": function() { return /* binding */ alignProperty; },
/* harmony export */   "fontGrid": function() { return /* binding */ fontGrid; },
/* harmony export */   "responsiveProperty": function() { return /* binding */ responsiveProperty; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");

var defaultTheme = (0,_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": function() { return /* reexport safe */ _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "unstable_createMuiStrictModeTheme": function() { return /* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "responsiveFontSizes": function() { return /* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "createGenerateClassName": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName; },
/* harmony export */   "jssPreset": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset; },
/* harmony export */   "ServerStyleSheets": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets; },
/* harmony export */   "StylesProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider; },
/* harmony export */   "MuiThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _transitions__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ responsiveFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_2__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": function() { return /* binding */ easing; },
/* harmony export */   "duration": function() { return /* binding */ duration; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ capitalize; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./pages/controlpanel/commands.js":
/*!****************************************!*\
  !*** ./pages/controlpanel/commands.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");

var _jsxFileName = "/home/qt-coder/cath.gq/pages/controlpanel/commands.js";









const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    minWidth: 650
  }
});

function createData(name, description, status) {
  return {
    name,
    description,
    status
  };
}

const rows = [createData('Command', 'Description', true), createData('Command', 'Description', true), createData('Command', 'Description', true), createData('Command', 'Description', true)];

function commands() {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    style: {
      background: '#1F1B24'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "simple table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            style: {
              color: '#fff'
            },
            children: "Commands"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            style: {
              color: '#fff'
            },
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            style: {
              color: '#fff'
            },
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: rows.map(row => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            component: "th",
            scope: "row",
            style: {
              color: '#fff'
            },
            children: row.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            style: {
              color: '#fff'
            },
            children: row.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            style: {
              color: '#fff'
            },
            children: row.status ? 'Online' : 'Offline'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, this)]
        }, row.name, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (commands);

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/controlpanel/commands.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL1BhcGVyLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZS9UYWJsZS5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFibGUvVGFibGVDb250ZXh0LmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZS9UYWJsZWx2bDJDb250ZXh0LmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZUJvZHkvVGFibGVCb2R5LmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZUNlbGwvVGFibGVDZWxsLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZUNvbnRhaW5lci9UYWJsZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFibGVIZWFkL1RhYmxlSGVhZC5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFibGVSb3cvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ibHVlLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY29tbW9uLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmV5LmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvaW5kaWdvLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcGluay5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL3JlZC5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU1peGlucy5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVRoZW1lLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUeXBvZ3JhcGh5LmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9kZWZhdWx0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9yZXNwb25zaXZlRm9udFNpemVzLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhZG93cy5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc3R5bGVkLmpzIiwid2VicGFjazovL2NhdGgtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvdHJhbnNpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy93aXRoVGhlbWUuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvLi9wYWdlcy9jb250cm9scGFuZWwvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIiIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC9leHRlcm5hbCBcImNsc3hcIiIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9jYXRoLWRhc2hib2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2F0aC1kYXNoYm9hcmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtaW5XaWR0aCIsImNyZWF0ZURhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJyb3dzIiwiY29tbWFuZHMiLCJjbGFzc2VzIiwiUGFwZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtYXAiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7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Ozs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2NvbnRyb2xwYW5lbC9jb21tYW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBlbGV2YXRpb25zID0ge307XG4gIHRoZW1lLnNoYWRvd3MuZm9yRWFjaChmdW5jdGlvbiAoc2hhZG93LCBpbmRleCkge1xuICAgIGVsZXZhdGlvbnNbXCJlbGV2YXRpb25cIi5jb25jYXQoaW5kZXgpXSA9IHtcbiAgICAgIGJveFNoYWRvdzogc2hhZG93XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYm94LXNoYWRvdycpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNxdWFyZT17ZmFsc2V9YC4gKi9cbiAgICByb3VuZGVkOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1c1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuZGl2aWRlcilcbiAgICB9XG4gIH0sIGVsZXZhdGlvbnMpO1xufTtcbnZhciBQYXBlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFBhcGVyKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRzcXVhcmUgPSBwcm9wcy5zcXVhcmUsXG4gICAgICBzcXVhcmUgPSBfcHJvcHMkc3F1YXJlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzcXVhcmUsXG4gICAgICBfcHJvcHMkZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uLFxuICAgICAgZWxldmF0aW9uID0gX3Byb3BzJGVsZXZhdGlvbiA9PT0gdm9pZCAwID8gMSA6IF9wcm9wcyRlbGV2YXRpb24sXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdlbGV2YXRpb24nIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcInNxdWFyZVwiLCBcImVsZXZhdGlvblwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHZhcmlhbnQgPT09ICdvdXRsaW5lZCcgPyBjbGFzc2VzLm91dGxpbmVkIDogY2xhc3Nlc1tcImVsZXZhdGlvblwiLmNvbmNhdChlbGV2YXRpb24pXSwgIXNxdWFyZSAmJiBjbGFzc2VzLnJvdW5kZWQpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFBhcGVyLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogU2hhZG93IGRlcHRoLCBjb3JyZXNwb25kcyB0byBgZHBgIGluIHRoZSBzcGVjLlxuICAgKiBJdCBhY2NlcHRzIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDI0IGluY2x1c2l2ZS5cbiAgICovXG4gIGVsZXZhdGlvbjogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLm51bWJlciwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgICBlbGV2YXRpb24gPSBwcm9wcy5lbGV2YXRpb247IC8vIGluIGNhc2UgYHdpdGhTdHlsZXNgIGZhaWxzIHRvIGluamVjdCB3ZSBkb24ndCBuZWVkIHRoaXMgd2FybmluZ1xuXG4gICAgaWYgKGNsYXNzZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGVsZXZhdGlvbiAhPSBudWxsICYmIGNsYXNzZXNbXCJlbGV2YXRpb25cIi5jb25jYXQoZWxldmF0aW9uKV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIk1hdGVyaWFsLVVJOiBUaGlzIGVsZXZhdGlvbiBgXCIuY29uY2F0KGVsZXZhdGlvbiwgXCJgIGlzIG5vdCBpbXBsZW1lbnRlZC5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCByb3VuZGVkIGNvcm5lcnMgYXJlIGRpc2FibGVkLlxuICAgKi9cbiAgc3F1YXJlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZWxldmF0aW9uJywgJ291dGxpbmVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBhcGVyJ1xufSkoUGFwZXIpOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUYWJsZUNvbnRleHQgZnJvbSAnLi9UYWJsZUNvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gICAgICBib3JkZXJTcGFjaW5nOiAwLFxuICAgICAgJyYgY2FwdGlvbic6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCB7XG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgY2FwdGlvblNpZGU6ICdib3R0b20nXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzdGlja3lIZWFkZXI9e3RydWV9YC4gKi9cbiAgICBzdGlja3lIZWFkZXI6IHtcbiAgICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnXG4gICAgfVxuICB9O1xufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50ID0gJ3RhYmxlJztcbnZhciBUYWJsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/IGRlZmF1bHRDb21wb25lbnQgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJHBhZGRpbmcgPSBwcm9wcy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9wcm9wcyRwYWRkaW5nID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfcHJvcHMkcGFkZGluZyxcbiAgICAgIF9wcm9wcyRzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHNpemUgPSBfcHJvcHMkc2l6ZSA9PT0gdm9pZCAwID8gJ21lZGl1bScgOiBfcHJvcHMkc2l6ZSxcbiAgICAgIF9wcm9wcyRzdGlja3lIZWFkZXIgPSBwcm9wcy5zdGlja3lIZWFkZXIsXG4gICAgICBzdGlja3lIZWFkZXIgPSBfcHJvcHMkc3RpY2t5SGVhZGVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzdGlja3lIZWFkZXIsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcInBhZGRpbmdcIiwgXCJzaXplXCIsIFwic3RpY2t5SGVhZGVyXCJdKTtcblxuICB2YXIgdGFibGUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIHNpemU6IHNpemUsXG4gICAgICBzdGlja3lIZWFkZXI6IHN0aWNreUhlYWRlclxuICAgIH07XG4gIH0sIFtwYWRkaW5nLCBzaXplLCBzdGlja3lIZWFkZXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0YWJsZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICByb2xlOiBDb21wb25lbnQgPT09IGRlZmF1bHRDb21wb25lbnQgPyBudWxsIDogJ3RhYmxlJyxcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHN0aWNreUhlYWRlciAmJiBjbGFzc2VzLnN0aWNreUhlYWRlcilcbiAgfSwgb3RoZXIpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSB0YWJsZSwgbm9ybWFsbHkgYFRhYmxlSGVhZGAgYW5kIGBUYWJsZUJvZHlgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgVGFibGVDZWxscyB0byBpbmhlcml0IHBhZGRpbmcgb2YgdGhlIFRhYmxlLlxuICAgKi9cbiAgcGFkZGluZzogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjaGVja2JveCcsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgVGFibGVDZWxscyB0byBpbmhlcml0IHNpemUgb2YgdGhlIFRhYmxlLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJ10pLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGhlYWRlciBzdGlja3kuXG4gICAqXG4gICAqIOKaoO+4jyBJdCBkb2Vzbid0IHdvcmsgd2l0aCBJRSAxMS5cbiAgICovXG4gIHN0aWNreUhlYWRlcjogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGUnXG59KShUYWJsZSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBUYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUYWJsZUNvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRleHQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBUYWJsZWx2bDJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBUYWJsZWx2bDJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1RhYmxlbHZsMkNvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZWx2bDJDb250ZXh0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUYWJsZWx2bDJDb250ZXh0IGZyb20gJy4uL1RhYmxlL1RhYmxlbHZsMkNvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAndGFibGUtcm93LWdyb3VwJ1xuICB9XG59O1xudmFyIHRhYmxlbHZsMiA9IHtcbiAgdmFyaWFudDogJ2JvZHknXG59O1xudmFyIGRlZmF1bHRDb21wb25lbnQgPSAndGJvZHknO1xudmFyIFRhYmxlQm9keSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlQm9keShwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyBkZWZhdWx0Q29tcG9uZW50IDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVsdmwyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0YWJsZWx2bDJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBDb21wb25lbnQgPT09IGRlZmF1bHRDb21wb25lbnQgPyBudWxsIDogJ3Jvd2dyb3VwJ1xuICB9LCBvdGhlcikpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFibGVCb2R5LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIG5vcm1hbGx5IGBUYWJsZVJvd2AuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYmxlQm9keSdcbn0pKFRhYmxlQm9keSk7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgeyBkYXJrZW4sIGZhZGUsIGxpZ2h0ZW4gfSBmcm9tICcuLi9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5pbXBvcnQgVGFibGVDb250ZXh0IGZyb20gJy4uL1RhYmxlL1RhYmxlQ29udGV4dCc7XG5pbXBvcnQgVGFibGVsdmwyQ29udGV4dCBmcm9tICcuLi9UYWJsZS9UYWJsZWx2bDJDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeS5ib2R5Miwge1xuICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ2luaGVyaXQnLFxuICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgYSByZW5kZXJpbmcgYnVnIHdpdGggc3Bhbm5lZCBjb2x1bW5zIGluIENocm9tZSA2Mi4wLlxuICAgICAgLy8gUmVtb3ZlcyB0aGUgYWxwaGEgKHNldHMgaXQgdG8gMSksIGFuZCBsaWdodGVucyBvciBkYXJrZW5zIHRoZSB0aGVtZSBjb2xvci5cbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWRcXG4gICAgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0ZW4oZmFkZSh0aGVtZS5wYWxldHRlLmRpdmlkZXIsIDEpLCAwLjg4KSA6IGRhcmtlbihmYWRlKHRoZW1lLnBhbGV0dGUuZGl2aWRlciwgMSksIDAuNjgpKSxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcGFkZGluZzogMTZcbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoZWFkXCJgIG9yIGBjb250ZXh0LnRhYmxlLmhlYWRgLiAqL1xuICAgIGhlYWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIGxpbmVIZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyNCksXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImJvZHlcImAgb3IgYGNvbnRleHQudGFibGUuYm9keWAuICovXG4gICAgYm9keToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmb290ZXJcImAgb3IgYGNvbnRleHQudGFibGUuZm9vdGVyYC4gKi9cbiAgICBmb290ZXI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgbGluZUhlaWdodDogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDIxKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTIpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYC4gKi9cbiAgICBzaXplU21hbGw6IHtcbiAgICAgIHBhZGRpbmc6ICc2cHggMjRweCA2cHggMTZweCcsXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDE2XG4gICAgICB9LFxuICAgICAgJyYkcGFkZGluZ0NoZWNrYm94Jzoge1xuICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgIC8vIHByZXZlbnQgdGhlIGNoZWNrYm94IGNvbHVtbiBmcm9tIGdyb3dpbmdcbiAgICAgICAgcGFkZGluZzogJzAgMTJweCAwIDE2cHgnLFxuICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxMixcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDE2XG4gICAgICAgIH0sXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcGFkZGluZz1cImNoZWNrYm94XCJgLiAqL1xuICAgIHBhZGRpbmdDaGVja2JveDoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgLy8gcHJldmVudCB0aGUgY2hlY2tib3ggY29sdW1uIGZyb20gZ3Jvd2luZ1xuICAgICAgcGFkZGluZzogJzAgMCAwIDRweCcsXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogMCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA0XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBhZGRpbmc9XCJub25lXCJgLiAqL1xuICAgIHBhZGRpbmdOb25lOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgcGFkZGluZzogMFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImxlZnRcImAuICovXG4gICAgYWxpZ25MZWZ0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImNlbnRlclwiYC4gKi9cbiAgICBhbGlnbkNlbnRlcjoge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cInJpZ2h0XCJgLiAqL1xuICAgIGFsaWduUmlnaHQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJqdXN0aWZ5XCJgLiAqL1xuICAgIGFsaWduSnVzdGlmeToge1xuICAgICAgdGV4dEFsaWduOiAnanVzdGlmeSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29udGV4dC50YWJsZS5zdGlja3lIZWFkZXI9e3RydWV9YC4gKi9cbiAgICBzdGlja3lIZWFkZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogVGhlIGNvbXBvbmVudCByZW5kZXJzIGEgYDx0aD5gIGVsZW1lbnQgd2hlbiB0aGUgcGFyZW50IGNvbnRleHQgaXMgYSBoZWFkZXJcbiAqIG9yIG90aGVyd2lzZSBhIGA8dGQ+YCBlbGVtZW50LlxuICovXG5cbnZhciBUYWJsZUNlbGwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJsZUNlbGwocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9wcm9wcyRhbGlnbiA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGFsaWduLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBwYWRkaW5nUHJvcCA9IHByb3BzLnBhZGRpbmcsXG4gICAgICBzY29wZVByb3AgPSBwcm9wcy5zY29wZSxcbiAgICAgIHNpemVQcm9wID0gcHJvcHMuc2l6ZSxcbiAgICAgIHNvcnREaXJlY3Rpb24gPSBwcm9wcy5zb3J0RGlyZWN0aW9uLFxuICAgICAgdmFyaWFudFByb3AgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFsaWduXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcInBhZGRpbmdcIiwgXCJzY29wZVwiLCBcInNpemVcIiwgXCJzb3J0RGlyZWN0aW9uXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIHRhYmxlID0gUmVhY3QudXNlQ29udGV4dChUYWJsZUNvbnRleHQpO1xuICB2YXIgdGFibGVsdmwyID0gUmVhY3QudXNlQ29udGV4dChUYWJsZWx2bDJDb250ZXh0KTtcbiAgdmFyIGlzSGVhZENlbGwgPSB0YWJsZWx2bDIgJiYgdGFibGVsdmwyLnZhcmlhbnQgPT09ICdoZWFkJztcbiAgdmFyIHJvbGU7XG4gIHZhciBDb21wb25lbnQ7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIENvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICByb2xlID0gaXNIZWFkQ2VsbCA/ICdjb2x1bW5oZWFkZXInIDogJ2NlbGwnO1xuICB9IGVsc2Uge1xuICAgIENvbXBvbmVudCA9IGlzSGVhZENlbGwgPyAndGgnIDogJ3RkJztcbiAgfVxuXG4gIHZhciBzY29wZSA9IHNjb3BlUHJvcDtcblxuICBpZiAoIXNjb3BlICYmIGlzSGVhZENlbGwpIHtcbiAgICBzY29wZSA9ICdjb2wnO1xuICB9XG5cbiAgdmFyIHBhZGRpbmcgPSBwYWRkaW5nUHJvcCB8fCAodGFibGUgJiYgdGFibGUucGFkZGluZyA/IHRhYmxlLnBhZGRpbmcgOiAnZGVmYXVsdCcpO1xuICB2YXIgc2l6ZSA9IHNpemVQcm9wIHx8ICh0YWJsZSAmJiB0YWJsZS5zaXplID8gdGFibGUuc2l6ZSA6ICdtZWRpdW0nKTtcbiAgdmFyIHZhcmlhbnQgPSB2YXJpYW50UHJvcCB8fCB0YWJsZWx2bDIgJiYgdGFibGVsdmwyLnZhcmlhbnQ7XG4gIHZhciBhcmlhU29ydCA9IG51bGw7XG5cbiAgaWYgKHNvcnREaXJlY3Rpb24pIHtcbiAgICBhcmlhU29ydCA9IHNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2FzY2VuZGluZycgOiAnZGVzY2VuZGluZyc7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBhbGlnbiAhPT0gJ2luaGVyaXQnICYmIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSldLCBwYWRkaW5nICE9PSAnZGVmYXVsdCcgJiYgY2xhc3Nlc1tcInBhZGRpbmdcIi5jb25jYXQoY2FwaXRhbGl6ZShwYWRkaW5nKSldLCBzaXplICE9PSAnbWVkaXVtJyAmJiBjbGFzc2VzW1wic2l6ZVwiLmNvbmNhdChjYXBpdGFsaXplKHNpemUpKV0sIHZhcmlhbnQgPT09ICdoZWFkJyAmJiB0YWJsZSAmJiB0YWJsZS5zdGlja3lIZWFkZXIgJiYgY2xhc3Nlcy5zdGlja3lIZWFkZXIpLFxuICAgIFwiYXJpYS1zb3J0XCI6IGFyaWFTb3J0LFxuICAgIHJvbGU6IHJvbGUsXG4gICAgc2NvcGU6IHNjb3BlXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYmxlQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHRleHQtYWxpZ24gb24gdGhlIHRhYmxlIGNlbGwgY29udGVudC5cbiAgICpcbiAgICogTW9uZXRhcnkgb3IgZ2VuZXJhbGx5IG51bWJlciBmaWVsZHMgKipzaG91bGQgYmUgcmlnaHQgYWxpZ25lZCoqIGFzIHRoYXQgYWxsb3dzXG4gICAqIHlvdSB0byBhZGQgdGhlbSB1cCBxdWlja2x5IGluIHlvdXIgaGVhZCB3aXRob3V0IGhhdmluZyB0byB3b3JyeSBhYm91dCBkZWNpbWFscy5cbiAgICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydjZW50ZXInLCAnaW5oZXJpdCcsICdqdXN0aWZ5JywgJ2xlZnQnLCAncmlnaHQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSB0YWJsZSBjZWxsIGNvbnRlbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgY2VsbC5cbiAgICogQnkgZGVmYXVsdCwgdGhlIFRhYmxlIHBhcmVudCBjb21wb25lbnQgc2V0IHRoZSB2YWx1ZSAoYGRlZmF1bHRgKS5cbiAgICovXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NoZWNrYm94JywgJ2RlZmF1bHQnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogU2V0IHNjb3BlIGF0dHJpYnV0ZS5cbiAgICovXG4gIHNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBzaXplIG9mIHRoZSBjZWxsLlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgVGFibGUgcGFyZW50IGNvbXBvbmVudCBzZXQgdGhlIHZhbHVlIChgbWVkaXVtYCkuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydtZWRpdW0nLCAnc21hbGwnXSksXG5cbiAgLyoqXG4gICAqIFNldCBhcmlhLXNvcnQgZGlyZWN0aW9uLlxuICAgKi9cbiAgc29ydERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnYXNjJywgJ2Rlc2MnLCBmYWxzZV0pLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBjZWxsIHR5cGUuXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBUYWJsZUhlYWQsIFRhYmxlQm9keSBvciBUYWJsZUZvb3RlciBwYXJlbnQgY29tcG9uZW50IHNldCB0aGUgdmFsdWUuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydib2R5JywgJ2Zvb3RlcicsICdoZWFkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYmxlQ2VsbCdcbn0pKFRhYmxlQ2VsbCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93WDogJ2F1dG8nXG4gIH1cbn07XG52YXIgVGFibGVDb250YWluZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJsZUNvbnRhaW5lcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSlcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFibGVDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHRhYmxlIGl0c2VsZiwgbm9ybWFsbHkgYDxUYWJsZSAvPmBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGVDb250YWluZXInXG59KShUYWJsZUNvbnRhaW5lcik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFRhYmxlbHZsMkNvbnRleHQgZnJvbSAnLi4vVGFibGUvVGFibGVsdmwyQ29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICd0YWJsZS1oZWFkZXItZ3JvdXAnXG4gIH1cbn07XG52YXIgdGFibGVsdmwyID0ge1xuICB2YXJpYW50OiAnaGVhZCdcbn07XG52YXIgZGVmYXVsdENvbXBvbmVudCA9ICd0aGVhZCc7XG52YXIgVGFibGVIZWFkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFibGVIZWFkKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/IGRlZmF1bHRDb21wb25lbnQgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZWx2bDJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRhYmxlbHZsMlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IENvbXBvbmVudCA9PT0gZGVmYXVsdENvbXBvbmVudCA/IG51bGwgOiAncm93Z3JvdXAnXG4gIH0sIG90aGVyKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJsZUhlYWQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgbm9ybWFsbHkgYFRhYmxlUm93YC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGVIZWFkJ1xufSkoVGFibGVIZWFkKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVGFibGVsdmwyQ29udGV4dCBmcm9tICcuLi9UYWJsZS9UYWJsZWx2bDJDb250ZXh0JztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICcuLi9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgICAgb3V0bGluZTogMCxcbiAgICAgICcmJGhvdmVyOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyXG4gICAgICB9LFxuICAgICAgJyYkc2VsZWN0ZWQsICYkc2VsZWN0ZWQ6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZE9wYWNpdHkpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNlbGVjdGVkPXt0cnVlfWAuICovXG4gICAgc2VsZWN0ZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgaG92ZXI9e3RydWV9YC4gKi9cbiAgICBob3Zlcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRhYmxlIHZhcmlhbnQ9XCJoZWFkXCIuICovXG4gICAgaGVhZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRhYmxlIHZhcmlhbnQ9XCJmb290ZXJcIi4gKi9cbiAgICBmb290ZXI6IHt9XG4gIH07XG59O1xudmFyIGRlZmF1bHRDb21wb25lbnQgPSAndHInO1xuLyoqXG4gKiBXaWxsIGF1dG9tYXRpY2FsbHkgc2V0IGR5bmFtaWMgcm93IGhlaWdodFxuICogYmFzZWQgb24gdGhlIG1hdGVyaWFsIHRhYmxlIGVsZW1lbnQgcGFyZW50IChoZWFkLCBib2R5LCBldGMpLlxuICovXG5cbnZhciBUYWJsZVJvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlUm93KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/IGRlZmF1bHRDb21wb25lbnQgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGhvdmVyID0gcHJvcHMuaG92ZXIsXG4gICAgICBob3ZlciA9IF9wcm9wcyRob3ZlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaG92ZXIsXG4gICAgICBfcHJvcHMkc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIHNlbGVjdGVkID0gX3Byb3BzJHNlbGVjdGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzZWxlY3RlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiaG92ZXJcIiwgXCJzZWxlY3RlZFwiXSk7XG5cbiAgdmFyIHRhYmxlbHZsMiA9IFJlYWN0LnVzZUNvbnRleHQoVGFibGVsdmwyQ29udGV4dCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHRhYmxlbHZsMiAmJiB7XG4gICAgICAnaGVhZCc6IGNsYXNzZXMuaGVhZCxcbiAgICAgICdmb290ZXInOiBjbGFzc2VzLmZvb3RlclxuICAgIH1bdGFibGVsdmwyLnZhcmlhbnRdLCBob3ZlciAmJiBjbGFzc2VzLmhvdmVyLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnNlbGVjdGVkKSxcbiAgICByb2xlOiBDb21wb25lbnQgPT09IGRlZmF1bHRDb21wb25lbnQgPyBudWxsIDogJ3JvdydcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2hvdWxkIGJlIHZhbGlkIDx0cj4gY2hpbGRyZW4gc3VjaCBhcyBgVGFibGVDZWxsYC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRhYmxlIHJvdyB3aWxsIHNoYWRlIG9uIGhvdmVyLlxuICAgKi9cbiAgaG92ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0YWJsZSByb3cgd2lsbCBoYXZlIHRoZSBzZWxlY3RlZCBzaGFkaW5nLlxuICAgKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYmxlUm93J1xufSkoVGFibGVSb3cpOyIsInZhciBibHVlID0ge1xuICA1MDogJyNlM2YyZmQnLFxuICAxMDA6ICcjYmJkZWZiJyxcbiAgMjAwOiAnIzkwY2FmOScsXG4gIDMwMDogJyM2NGI1ZjYnLFxuICA0MDA6ICcjNDJhNWY1JyxcbiAgNTAwOiAnIzIxOTZmMycsXG4gIDYwMDogJyMxZTg4ZTUnLFxuICA3MDA6ICcjMTk3NmQyJyxcbiAgODAwOiAnIzE1NjVjMCcsXG4gIDkwMDogJyMwZDQ3YTEnLFxuICBBMTAwOiAnIzgyYjFmZicsXG4gIEEyMDA6ICcjNDQ4YWZmJyxcbiAgQTQwMDogJyMyOTc5ZmYnLFxuICBBNzAwOiAnIzI5NjJmZidcbn07XG5leHBvcnQgZGVmYXVsdCBibHVlOyIsInZhciBjb21tb24gPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI2ZmZidcbn07XG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwidmFyIGdyZWVuID0ge1xuICA1MDogJyNlOGY1ZTknLFxuICAxMDA6ICcjYzhlNmM5JyxcbiAgMjAwOiAnI2E1ZDZhNycsXG4gIDMwMDogJyM4MWM3ODQnLFxuICA0MDA6ICcjNjZiYjZhJyxcbiAgNTAwOiAnIzRjYWY1MCcsXG4gIDYwMDogJyM0M2EwNDcnLFxuICA3MDA6ICcjMzg4ZTNjJyxcbiAgODAwOiAnIzJlN2QzMicsXG4gIDkwMDogJyMxYjVlMjAnLFxuICBBMTAwOiAnI2I5ZjZjYScsXG4gIEEyMDA6ICcjNjlmMGFlJyxcbiAgQTQwMDogJyMwMGU2NzYnLFxuICBBNzAwOiAnIzAwYzg1Mydcbn07XG5leHBvcnQgZGVmYXVsdCBncmVlbjsiLCJ2YXIgZ3JleSA9IHtcbiAgNTA6ICcjZmFmYWZhJyxcbiAgMTAwOiAnI2Y1ZjVmNScsXG4gIDIwMDogJyNlZWVlZWUnLFxuICAzMDA6ICcjZTBlMGUwJyxcbiAgNDAwOiAnI2JkYmRiZCcsXG4gIDUwMDogJyM5ZTllOWUnLFxuICA2MDA6ICcjNzU3NTc1JyxcbiAgNzAwOiAnIzYxNjE2MScsXG4gIDgwMDogJyM0MjQyNDInLFxuICA5MDA6ICcjMjEyMTIxJyxcbiAgQTEwMDogJyNkNWQ1ZDUnLFxuICBBMjAwOiAnI2FhYWFhYScsXG4gIEE0MDA6ICcjMzAzMDMwJyxcbiAgQTcwMDogJyM2MTYxNjEnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JleTsiLCJ2YXIgaW5kaWdvID0ge1xuICA1MDogJyNlOGVhZjYnLFxuICAxMDA6ICcjYzVjYWU5JyxcbiAgMjAwOiAnIzlmYThkYScsXG4gIDMwMDogJyM3OTg2Y2InLFxuICA0MDA6ICcjNWM2YmMwJyxcbiAgNTAwOiAnIzNmNTFiNScsXG4gIDYwMDogJyMzOTQ5YWInLFxuICA3MDA6ICcjMzAzZjlmJyxcbiAgODAwOiAnIzI4MzU5MycsXG4gIDkwMDogJyMxYTIzN2UnLFxuICBBMTAwOiAnIzhjOWVmZicsXG4gIEEyMDA6ICcjNTM2ZGZlJyxcbiAgQTQwMDogJyMzZDVhZmUnLFxuICBBNzAwOiAnIzMwNGZmZSdcbn07XG5leHBvcnQgZGVmYXVsdCBpbmRpZ287IiwidmFyIG9yYW5nZSA9IHtcbiAgNTA6ICcjZmZmM2UwJyxcbiAgMTAwOiAnI2ZmZTBiMicsXG4gIDIwMDogJyNmZmNjODAnLFxuICAzMDA6ICcjZmZiNzRkJyxcbiAgNDAwOiAnI2ZmYTcyNicsXG4gIDUwMDogJyNmZjk4MDAnLFxuICA2MDA6ICcjZmI4YzAwJyxcbiAgNzAwOiAnI2Y1N2MwMCcsXG4gIDgwMDogJyNlZjZjMDAnLFxuICA5MDA6ICcjZTY1MTAwJyxcbiAgQTEwMDogJyNmZmQxODAnLFxuICBBMjAwOiAnI2ZmYWI0MCcsXG4gIEE0MDA6ICcjZmY5MTAwJyxcbiAgQTcwMDogJyNmZjZkMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgb3JhbmdlOyIsInZhciBwaW5rID0ge1xuICA1MDogJyNmY2U0ZWMnLFxuICAxMDA6ICcjZjhiYmQwJyxcbiAgMjAwOiAnI2Y0OGZiMScsXG4gIDMwMDogJyNmMDYyOTInLFxuICA0MDA6ICcjZWM0MDdhJyxcbiAgNTAwOiAnI2U5MWU2MycsXG4gIDYwMDogJyNkODFiNjAnLFxuICA3MDA6ICcjYzIxODViJyxcbiAgODAwOiAnI2FkMTQ1NycsXG4gIDkwMDogJyM4ODBlNGYnLFxuICBBMTAwOiAnI2ZmODBhYicsXG4gIEEyMDA6ICcjZmY0MDgxJyxcbiAgQTQwMDogJyNmNTAwNTcnLFxuICBBNzAwOiAnI2M1MTE2Midcbn07XG5leHBvcnQgZGVmYXVsdCBwaW5rOyIsInZhciByZWQgPSB7XG4gIDUwOiAnI2ZmZWJlZScsXG4gIDEwMDogJyNmZmNkZDInLFxuICAyMDA6ICcjZWY5YTlhJyxcbiAgMzAwOiAnI2U1NzM3MycsXG4gIDQwMDogJyNlZjUzNTAnLFxuICA1MDA6ICcjZjQ0MzM2JyxcbiAgNjAwOiAnI2U1MzkzNScsXG4gIDcwMDogJyNkMzJmMmYnLFxuICA4MDA6ICcjYzYyODI4JyxcbiAgOTAwOiAnI2I3MWMxYycsXG4gIEExMDA6ICcjZmY4YTgwJyxcbiAgQTIwMDogJyNmZjUyNTInLFxuICBBNDAwOiAnI2ZmMTc0NCcsXG4gIEE3MDA6ICcjZDUwMDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZDsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdob3NlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gdGhlIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2xhbXBlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHJldHVybnMge251bWJlcn0gQSBudW1iZXIgaW4gdGhlIHJhbmdlIFttaW4sIG1heF1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgXCIuY29uY2F0KHZhbHVlLCBcIiBpcyBvdXQgb2YgcmFuZ2UgW1wiKS5jb25jYXQobWluLCBcIiwgXCIpLmNvbmNhdChtYXgsIFwiXS5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyBoZXggZm9ybWF0IHRvIENTUyByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhleCBjb2xvciwgaS5lLiAjbm5uIG9yICNubm5ubm5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmdcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGNvbG9yLnN1YnN0cigxKTtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIi57MSxcIi5jb25jYXQoY29sb3IubGVuZ3RoID49IDYgPyAyIDogMSwgXCJ9XCIpLCAnZycpO1xuICB2YXIgY29sb3JzID0gY29sb3IubWF0Y2gocmUpO1xuXG4gIGlmIChjb2xvcnMgJiYgY29sb3JzWzBdLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuICsgbjtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb2xvcnMgPyBcInJnYlwiLmNvbmNhdChjb2xvcnMubGVuZ3RoID09PSA0ID8gJ2EnIDogJycsIFwiKFwiKS5jb25jYXQoY29sb3JzLm1hcChmdW5jdGlvbiAobiwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCAzID8gcGFyc2VJbnQobiwgMTYpIDogTWF0aC5yb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUgKiAxMDAwKSAvIDEwMDA7XG4gIH0pLmpvaW4oJywgJyksIFwiKVwiKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBpbnRUb0hleChpbnQpIHtcbiAgdmFyIGhleCA9IGludC50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIuY29uY2F0KGhleCkgOiBoZXg7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgcmdiIGZvcm1hdCB0byBDU1MgaGV4IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBSR0IgY29sb3IsIGkuZS4gcmdiKG4sIG4sIG4pXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nLCBpLmUuICNubm5ubm5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgX2RlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpLFxuICAgICAgdmFsdWVzID0gX2RlY29tcG9zZUNvbG9yLnZhbHVlcztcblxuICByZXR1cm4gXCIjXCIuY29uY2F0KHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaW50VG9IZXgobik7XG4gIH0pLmpvaW4oJycpKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIGhzbCBmb3JtYXQgdG8gcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIU0wgY29sb3IgdmFsdWVzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZ2IgY29sb3IgdmFsdWVzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgX2NvbG9yID0gY29sb3IsXG4gICAgICB2YWx1ZXMgPSBfY29sb3IudmFsdWVzO1xuICB2YXIgaCA9IHZhbHVlc1swXTtcbiAgdmFyIHMgPSB2YWx1ZXNbMV0gLyAxMDA7XG4gIHZhciBsID0gdmFsdWVzWzJdIC8gMTAwO1xuICB2YXIgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiBmKG4pIHtcbiAgICB2YXIgayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogKG4gKyBoIC8gMzApICUgMTI7XG4gICAgcmV0dXJuIGwgLSBhICogTWF0aC5tYXgoTWF0aC5taW4oayAtIDMsIDkgLSBrLCAxKSwgLTEpO1xuICB9O1xuXG4gIHZhciB0eXBlID0gJ3JnYic7XG4gIHZhciByZ2IgPSBbTWF0aC5yb3VuZChmKDApICogMjU1KSwgTWF0aC5yb3VuZChmKDgpICogMjU1KSwgTWF0aC5yb3VuZChmKDQpICogMjU1KV07XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdoc2xhJykge1xuICAgIHR5cGUgKz0gJ2EnO1xuICAgIHJnYi5wdXNoKHZhbHVlc1szXSk7XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3Ioe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiByZ2JcbiAgfSk7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgYW5kIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgcmdiICUgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBNVUkgY29sb3Igb2JqZWN0OiB7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci50eXBlKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaWYgKGNvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGRlY29tcG9zZUNvbG9yKGhleFRvUmdiKGNvbG9yKSk7XG4gIH1cblxuICB2YXIgbWFya2VyID0gY29sb3IuaW5kZXhPZignKCcpO1xuICB2YXIgdHlwZSA9IGNvbG9yLnN1YnN0cmluZygwLCBtYXJrZXIpO1xuXG4gIGlmIChbJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ10uaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgYFwiLmNvbmNhdChjb2xvciwgXCJgIGNvbG9yLlxcbldlIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpLlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMywgY29sb3IpKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiB2YWx1ZXNcbiAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3Qgd2l0aCB0eXBlIGFuZCB2YWx1ZXMgdG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbG9yIC0gRGVjb21wb3NlZCBjb2xvclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yLnR5cGUgLSBPbmUgb2Y6ICdyZ2InLCAncmdiYScsICdoc2wnLCAnaHNsYSdcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbG9yLnZhbHVlcyAtIFtuLG4sbl0gb3IgW24sbixuLG5dXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgdmFyIHR5cGUgPSBjb2xvci50eXBlO1xuICB2YXIgdmFsdWVzID0gY29sb3IudmFsdWVzO1xuXG4gIGlmICh0eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIC8vIE9ubHkgY29udmVydCB0aGUgZmlyc3QgMyB2YWx1ZXMgdG8gaW50IChpLmUuIG5vdCBhbHBoYSlcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICByZXR1cm4gaSA8IDMgPyBwYXJzZUludChuLCAxMCkgOiBuO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgdmFsdWVzWzFdID0gXCJcIi5jb25jYXQodmFsdWVzWzFdLCBcIiVcIik7XG4gICAgdmFsdWVzWzJdID0gXCJcIi5jb25jYXQodmFsdWVzWzJdLCBcIiVcIik7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQodHlwZSwgXCIoXCIpLmNvbmNhdCh2YWx1ZXMuam9pbignLCAnKSwgXCIpXCIpO1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGZvcmVncm91bmQsIGJhY2tncm91bmQpIHtcbiAgdmFyIGx1bUEgPSBnZXRMdW1pbmFuY2UoZm9yZWdyb3VuZCk7XG4gIHZhciBsdW1CID0gZ2V0THVtaW5hbmNlKGJhY2tncm91bmQpO1xuICByZXR1cm4gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcbn1cbi8qKlxuICogVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgYW55IHBvaW50IGluIGEgY29sb3Igc3BhY2UsXG4gKiBub3JtYWxpemVkIHRvIDAgZm9yIGRhcmtlc3QgYmxhY2sgYW5kIDEgZm9yIGxpZ2h0ZXN0IHdoaXRlLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgdGhlIGNvbG9yIGluIHRoZSByYW5nZSAwIC0gMVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciByZ2IgPSBjb2xvci50eXBlID09PSAnaHNsJyA/IGRlY29tcG9zZUNvbG9yKGhzbFRvUmdiKGNvbG9yKSkudmFsdWVzIDogY29sb3IudmFsdWVzO1xuICByZ2IgPSByZ2IubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwgLz0gMjU1OyAvLyBub3JtYWxpemVkXG5cbiAgICByZXR1cm4gdmFsIDw9IDAuMDM5MjggPyB2YWwgLyAxMi45MiA6IE1hdGgucG93KCh2YWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSk7IC8vIFRydW5jYXRlIGF0IDMgZGlnaXRzXG5cbiAgcmV0dXJuIE51bWJlcigoMC4yMTI2ICogcmdiWzBdICsgMC43MTUyICogcmdiWzFdICsgMC4wNzIyICogcmdiWzJdKS50b0ZpeGVkKDMpKTtcbn1cbi8qKlxuICogRGFya2VuIG9yIGxpZ2h0ZW4gYSBjb2xvciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXG4gKiBMaWdodCBjb2xvcnMgYXJlIGRhcmtlbmVkLCBkYXJrIGNvbG9ycyBhcmUgbGlnaHRlbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudD0wLjE1IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG4gIHJldHVybiBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41ID8gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkgOiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCk7XG59XG4vKipcbiAqIFNldCB0aGUgYWJzb2x1dGUgdHJhbnNwYXJlbmN5IG9mIGEgY29sb3IuXG4gKiBBbnkgZXhpc3RpbmcgYWxwaGEgdmFsdWVzIGFyZSBvdmVyd3JpdHRlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB2YWx1ZSB0byBzZXQgdGhlIGFscGhhIGNoYW5uZWwgdG8gaW4gdGhlIHJhbmdlIDAgLTFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGUoY29sb3IsIHZhbHVlKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ3JnYicgfHwgY29sb3IudHlwZSA9PT0gJ2hzbCcpIHtcbiAgICBjb2xvci50eXBlICs9ICdhJztcbiAgfVxuXG4gIGNvbG9yLnZhbHVlc1szXSA9IHZhbHVlO1xuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBEYXJrZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICo9IDEgLSBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBMaWdodGVucyBhIGNvbG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICs9ICgxMDAgLSBjb2xvci52YWx1ZXNbMl0pICogY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICs9ICgyNTUgLSBjb2xvci52YWx1ZXNbaV0pICogY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4vLyBJdCBjYW4ndCBiZSBjb25maWd1cmVkIGFzIGl0J3MgdXNlZCBzdGF0aWNhbGx5IGZvciBwcm9wVHlwZXMuXG5leHBvcnQgdmFyIGtleXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107IC8vIEtlZXAgaW4gbWluZCB0aGF0IEBtZWRpYSBpcyBpbmNsdXNpdmUgYnkgdGhlIENTUyBzcGVjaWZpY2F0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHZvaWQgMCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHZvaWQgMCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdm9pZCAwID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYnJlYWtwb2ludHMsIFtcInZhbHVlc1wiLCBcInVuaXRcIiwgXCJzdGVwXCJdKTtcblxuICBmdW5jdGlvbiB1cChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdmFsdWVzW2tleV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleV0gOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHZhbHVlKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bihrZXkpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KSArIDE7XG4gICAgdmFyIHVwcGVyYm91bmQgPSB2YWx1ZXNba2V5c1tlbmRJbmRleF1dO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgLy8geGwgZG93biBhcHBsaWVzIHRvIGFsbCBzaXplc1xuICAgICAgcmV0dXJuIHVwKCd4cycpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB1cHBlcmJvdW5kID09PSAnbnVtYmVyJyAmJiBlbmRJbmRleCA+IDAgPyB1cHBlcmJvdW5kIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWF4LXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2YoZW5kKTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdXAoc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh0eXBlb2YgdmFsdWVzW3N0YXJ0XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNbc3RhcnRdIDogc3RhcnQpLmNvbmNhdCh1bml0LCBcIikgYW5kIFwiKSArIFwiKG1heC13aWR0aDpcIi5jb25jYXQoKGVuZEluZGV4ICE9PSAtMSAmJiB0eXBlb2YgdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gOiBlbmQpIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubHkoa2V5KSB7XG4gICAgcmV0dXJuIGJldHdlZW4oa2V5LCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkdGgoa2V5KSB7XG4gICAgcmV0dXJuIHZhbHVlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBrZXlzOiBrZXlzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHVwOiB1cCxcbiAgICBkb3duOiBkb3duLFxuICAgIGJldHdlZW46IGJldHdlZW4sXG4gICAgb25seTogb25seSxcbiAgICB3aWR0aDogd2lkdGhcbiAgfSwgb3RoZXIpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGd1dHRlcnM6IGZ1bmN0aW9uIGd1dHRlcnMoKSB7XG4gICAgICB2YXIgc3R5bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIC8vIFRvIGRlcHJlY2F0ZSBpbiB2NC4xXG4gICAgICAvLyAgICAgICB3YXJuaW5nKFxuICAgICAgLy8gICAgICAgICBmYWxzZSxcbiAgICAgIC8vICAgICAgICAgW1xuICAgICAgLy8gICAgICAgICAgICdNYXRlcmlhbC1VSTogVGhlbWUubWl4aW5zLmd1dHRlcnMoKSBpcyBkZXByZWNhdGVkLicsXG4gICAgICAvLyAgICAgICAgICAgJ1lvdSBjYW4gdXNlIHRoZSBzb3VyY2Ugb2YgdGhlIG1peGluIGRpcmVjdGx5OicsXG4gICAgICAvLyAgICAgICAgICAgYFxuICAgICAgLy8gcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAvLyBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAvLyAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgLy8gICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAvLyB9LFxuICAgICAgLy8gYCxcbiAgICAgIC8vICAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgIC8vICAgICAgICk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSkpKTtcbiAgICB9LFxuICAgIHRvb2xiYXI6IChfdG9vbGJhciA9IHtcbiAgICAgIG1pbkhlaWdodDogNTZcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbkhlaWdodDogNjRcbiAgICB9KSwgX3Rvb2xiYXIpXG4gIH0sIG1peGlucyk7XG59IiwiaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVNdWlUaGVtZSBmcm9tICcuL2NyZWF0ZU11aVRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU11aVN0cmljdE1vZGVUaGVtZShvcHRpb25zKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVNdWlUaGVtZS5hcHBseSh2b2lkIDAsIFtkZWVwbWVyZ2Uoe1xuICAgIHVuc3RhYmxlX3N0cmljdE1vZGU6IHRydWVcbiAgfSwgb3B0aW9ucyldLmNvbmNhdChhcmdzKSk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludHMnO1xuaW1wb3J0IGNyZWF0ZU1peGlucyBmcm9tICcuL2NyZWF0ZU1peGlucyc7XG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICcuL2NyZWF0ZVBhbGV0dGUnO1xuaW1wb3J0IGNyZWF0ZVR5cG9ncmFwaHkgZnJvbSAnLi9jcmVhdGVUeXBvZ3JhcGh5JztcbmltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XG5pbXBvcnQgc2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgY3JlYXRlU3BhY2luZyBmcm9tICcuL2NyZWF0ZVNwYWNpbmcnO1xuaW1wb3J0IHRyYW5zaXRpb25zIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuL3pJbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU11aVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzSW5wdXQgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJG1peGlucyA9IG9wdGlvbnMubWl4aW5zLFxuICAgICAgbWl4aW5zSW5wdXQgPSBfb3B0aW9ucyRtaXhpbnMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkbWl4aW5zLFxuICAgICAgX29wdGlvbnMkcGFsZXR0ZSA9IG9wdGlvbnMucGFsZXR0ZSxcbiAgICAgIHBhbGV0dGVJbnB1dCA9IF9vcHRpb25zJHBhbGV0dGUgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkcGFsZXR0ZSxcbiAgICAgIHNwYWNpbmdJbnB1dCA9IG9wdGlvbnMuc3BhY2luZyxcbiAgICAgIF9vcHRpb25zJHR5cG9ncmFwaHkgPSBvcHRpb25zLnR5cG9ncmFwaHksXG4gICAgICB0eXBvZ3JhcGh5SW5wdXQgPSBfb3B0aW9ucyR0eXBvZ3JhcGh5ID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHR5cG9ncmFwaHksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJicmVha3BvaW50c1wiLCBcIm1peGluc1wiLCBcInBhbGV0dGVcIiwgXCJzcGFjaW5nXCIsIFwidHlwb2dyYXBoeVwiXSk7XG5cbiAgdmFyIHBhbGV0dGUgPSBjcmVhdGVQYWxldHRlKHBhbGV0dGVJbnB1dCk7XG4gIHZhciBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoc3BhY2luZ0lucHV0KTtcbiAgdmFyIG11aVRoZW1lID0gZGVlcG1lcmdlKHtcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBtaXhpbnM6IGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zSW5wdXQpLFxuICAgIG92ZXJyaWRlczoge30sXG4gICAgLy8gSW5qZWN0IGN1c3RvbSBzdHlsZXNcbiAgICBwYWxldHRlOiBwYWxldHRlLFxuICAgIHByb3BzOiB7fSxcbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgcHJvcHNcbiAgICBzaGFkb3dzOiBzaGFkb3dzLFxuICAgIHR5cG9ncmFwaHk6IGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICB0cmFuc2l0aW9uczogdHJhbnNpdGlvbnMsXG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiBfZGVmaW5lUHJvcGVydHkoe30sIFwiJiRcIi5jb25jYXQoa2V5KSwgY2hpbGQpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSwgJycsICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL3BzZXVkby1jbGFzc2VzLWd1aWRlJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBzdHlsZSB0byBwcmV2ZW50IGdsb2JhbCBjb25mbGljdHMuXG5cblxuICAgICAgICAgIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyYXZlcnNlKG11aVRoZW1lLm92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gbXVpVGhlbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU11aVRoZW1lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi4vY29sb3JzL2NvbW1vbic7XG5pbXBvcnQgZ3JleSBmcm9tICcuLi9jb2xvcnMvZ3JleSc7XG5pbXBvcnQgaW5kaWdvIGZyb20gJy4uL2NvbG9ycy9pbmRpZ28nO1xuaW1wb3J0IHBpbmsgZnJvbSAnLi4vY29sb3JzL3BpbmsnO1xuaW1wb3J0IHJlZCBmcm9tICcuLi9jb2xvcnMvcmVkJztcbmltcG9ydCBvcmFuZ2UgZnJvbSAnLi4vY29sb3JzL29yYW5nZSc7XG5pbXBvcnQgYmx1ZSBmcm9tICcuLi9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgZ3JlZW4gZnJvbSAnLi4vY29sb3JzL2dyZWVuJztcbmltcG9ydCB7IGRhcmtlbiwgZ2V0Q29udHJhc3RSYXRpbywgbGlnaHRlbiB9IGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgdmFyIGxpZ2h0ID0ge1xuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHRleHQuXG4gIHRleHQ6IHtcbiAgICAvLyBUaGUgbW9zdCBpbXBvcnRhbnQgdGV4dC5cbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgLy8gU2Vjb25kYXJ5IHRleHQuXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gRGlzYWJsZWQgdGV4dCBoYXZlIGV2ZW4gbG93ZXIgdmlzdWFsIHByb21pbmVuY2UuXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICAvLyBUZXh0IGhpbnRzLlxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9LFxuICAvLyBUaGUgY29sb3IgdXNlZCB0byBkaXZpZGUgZGlmZmVyZW50IGVsZW1lbnRzLlxuICBkaXZpZGVyOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBzdXJmYWNlcy5cbiAgLy8gQ29uc2lzdGVuY3kgYmV0d2VlbiB0aGVzZSB2YWx1ZXMgaXMgaW1wb3J0YW50LlxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGNvbW1vbi53aGl0ZSxcbiAgICBkZWZhdWx0OiBncmV5WzUwXVxuICB9LFxuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIGFjdGlvbiBlbGVtZW50cy5cbiAgYWN0aW9uOiB7XG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGFjdGl2ZSBhY3Rpb24gbGlrZSBhbiBpY29uIGJ1dHRvbi5cbiAgICBhY3RpdmU6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gaG92ZXJlZCBhY3Rpb24uXG4gICAgaG92ZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDQsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgc2VsZWN0ZWQgYWN0aW9uLlxuICAgIHNlbGVjdGVkOiAncmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjA4LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjEyXG4gIH1cbn07XG5leHBvcnQgdmFyIGRhcmsgPSB7XG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiBjb21tb24ud2hpdGUsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaWNvbjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgfSxcbiAgZGl2aWRlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGdyZXlbODAwXSxcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCdcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgYWN0aXZlOiBjb21tb24ud2hpdGUsXG4gICAgaG92ZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDgsXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMTYsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjI0XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZExpZ2h0T3JEYXJrKGludGVudCwgZGlyZWN0aW9uLCBzaGFkZSwgdG9uYWxPZmZzZXQpIHtcbiAgdmFyIHRvbmFsT2Zmc2V0TGlnaHQgPSB0b25hbE9mZnNldC5saWdodCB8fCB0b25hbE9mZnNldDtcbiAgdmFyIHRvbmFsT2Zmc2V0RGFyayA9IHRvbmFsT2Zmc2V0LmRhcmsgfHwgdG9uYWxPZmZzZXQgKiAxLjU7XG5cbiAgaWYgKCFpbnRlbnRbZGlyZWN0aW9uXSkge1xuICAgIGlmIChpbnRlbnQuaGFzT3duUHJvcGVydHkoc2hhZGUpKSB7XG4gICAgICBpbnRlbnRbZGlyZWN0aW9uXSA9IGludGVudFtzaGFkZV07XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsaWdodCcpIHtcbiAgICAgIGludGVudC5saWdodCA9IGxpZ2h0ZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0TGlnaHQpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGFyaycpIHtcbiAgICAgIGludGVudC5kYXJrID0gZGFya2VuKGludGVudC5tYWluLCB0b25hbE9mZnNldERhcmspO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWxldHRlKHBhbGV0dGUpIHtcbiAgdmFyIF9wYWxldHRlJHByaW1hcnkgPSBwYWxldHRlLnByaW1hcnksXG4gICAgICBwcmltYXJ5ID0gX3BhbGV0dGUkcHJpbWFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBpbmRpZ29bMzAwXSxcbiAgICBtYWluOiBpbmRpZ29bNTAwXSxcbiAgICBkYXJrOiBpbmRpZ29bNzAwXVxuICB9IDogX3BhbGV0dGUkcHJpbWFyeSxcbiAgICAgIF9wYWxldHRlJHNlY29uZGFyeSA9IHBhbGV0dGUuc2Vjb25kYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gX3BhbGV0dGUkc2Vjb25kYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHBpbmsuQTIwMCxcbiAgICBtYWluOiBwaW5rLkE0MDAsXG4gICAgZGFyazogcGluay5BNzAwXG4gIH0gOiBfcGFsZXR0ZSRzZWNvbmRhcnksXG4gICAgICBfcGFsZXR0ZSRlcnJvciA9IHBhbGV0dGUuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wYWxldHRlJGVycm9yID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHJlZFszMDBdLFxuICAgIG1haW46IHJlZFs1MDBdLFxuICAgIGRhcms6IHJlZFs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRlcnJvcixcbiAgICAgIF9wYWxldHRlJHdhcm5pbmcgPSBwYWxldHRlLndhcm5pbmcsXG4gICAgICB3YXJuaW5nID0gX3BhbGV0dGUkd2FybmluZyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBvcmFuZ2VbMzAwXSxcbiAgICBtYWluOiBvcmFuZ2VbNTAwXSxcbiAgICBkYXJrOiBvcmFuZ2VbNzAwXVxuICB9IDogX3BhbGV0dGUkd2FybmluZyxcbiAgICAgIF9wYWxldHRlJGluZm8gPSBwYWxldHRlLmluZm8sXG4gICAgICBpbmZvID0gX3BhbGV0dGUkaW5mbyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBibHVlWzMwMF0sXG4gICAgbWFpbjogYmx1ZVs1MDBdLFxuICAgIGRhcms6IGJsdWVbNzAwXVxuICB9IDogX3BhbGV0dGUkaW5mbyxcbiAgICAgIF9wYWxldHRlJHN1Y2Nlc3MgPSBwYWxldHRlLnN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzID0gX3BhbGV0dGUkc3VjY2VzcyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBncmVlblszMDBdLFxuICAgIG1haW46IGdyZWVuWzUwMF0sXG4gICAgZGFyazogZ3JlZW5bNzAwXVxuICB9IDogX3BhbGV0dGUkc3VjY2VzcyxcbiAgICAgIF9wYWxldHRlJHR5cGUgPSBwYWxldHRlLnR5cGUsXG4gICAgICB0eXBlID0gX3BhbGV0dGUkdHlwZSA9PT0gdm9pZCAwID8gJ2xpZ2h0JyA6IF9wYWxldHRlJHR5cGUsXG4gICAgICBfcGFsZXR0ZSRjb250cmFzdFRocmUgPSBwYWxldHRlLmNvbnRyYXN0VGhyZXNob2xkLFxuICAgICAgY29udHJhc3RUaHJlc2hvbGQgPSBfcGFsZXR0ZSRjb250cmFzdFRocmUgPT09IHZvaWQgMCA/IDMgOiBfcGFsZXR0ZSRjb250cmFzdFRocmUsXG4gICAgICBfcGFsZXR0ZSR0b25hbE9mZnNldCA9IHBhbGV0dGUudG9uYWxPZmZzZXQsXG4gICAgICB0b25hbE9mZnNldCA9IF9wYWxldHRlJHRvbmFsT2Zmc2V0ID09PSB2b2lkIDAgPyAwLjIgOiBfcGFsZXR0ZSR0b25hbE9mZnNldCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHBhbGV0dGUsIFtcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcInR5cGVcIiwgXCJjb250cmFzdFRocmVzaG9sZFwiLCBcInRvbmFsT2Zmc2V0XCJdKTsgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIGFzXG4gIC8vIEJvb3RzdHJhcDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvMWQ2ZTM3MTBkZDQ0N2RlMWEyMDBmMjllOGZhNTIxZjhhMDkwOGY3MC9zY3NzL19mdW5jdGlvbnMuc2NzcyNMNTlcbiAgLy8gYW5kIG1hdGVyaWFsLWNvbXBvbmVudHMtd2ViIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYWM0NmI4ODYzYzRkYWI5ZmMyMmM0YzY2MmRjNmJkMWI2NWRkNjUyZi9wYWNrYWdlcy9tZGMtdGhlbWUvX2Z1bmN0aW9ucy5zY3NzI0w1NFxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmQpIHtcbiAgICB2YXIgY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBkYXJrLnRleHQucHJpbWFyeSkgPj0gY29udHJhc3RUaHJlc2hvbGQgPyBkYXJrLnRleHQucHJpbWFyeSA6IGxpZ2h0LnRleHQucHJpbWFyeTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgY29udHJhc3QgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGNvbnRyYXN0VGV4dCk7XG5cbiAgICAgIGlmIChjb250cmFzdCA8IDMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGNvbnRyYXN0IHJhdGlvIG9mIFwiLmNvbmNhdChjb250cmFzdCwgXCI6MSBmb3IgXCIpLmNvbmNhdChjb250cmFzdFRleHQsIFwiIG9uIFwiKS5jb25jYXQoYmFja2dyb3VuZCksICdmYWxscyBiZWxvdyB0aGUgV0NBRyByZWNvbW1lbmRlZCBhYnNvbHV0ZSBtaW5pbXVtIGNvbnRyYXN0IHJhdGlvIG9mIDM6MS4nLCAnaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0J10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250cmFzdFRleHQ7XG4gIH1cblxuICB2YXIgYXVnbWVudENvbG9yID0gZnVuY3Rpb24gYXVnbWVudENvbG9yKGNvbG9yKSB7XG4gICAgdmFyIG1haW5TaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogNTAwO1xuICAgIHZhciBsaWdodFNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAzMDA7XG4gICAgdmFyIGRhcmtTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogNzAwO1xuICAgIGNvbG9yID0gX2V4dGVuZHMoe30sIGNvbG9yKTtcblxuICAgIGlmICghY29sb3IubWFpbiAmJiBjb2xvclttYWluU2hhZGVdKSB7XG4gICAgICBjb2xvci5tYWluID0gY29sb3JbbWFpblNoYWRlXTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbG9yLm1haW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcblRoZSBjb2xvciBvYmplY3QgbmVlZHMgdG8gaGF2ZSBhIGBtYWluYCBwcm9wZXJ0eSBvciBhIGBcIi5jb25jYXQobWFpblNoYWRlLCBcImAgcHJvcGVydHkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg0LCBtYWluU2hhZGUpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yLm1haW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5gY29sb3IubWFpbmAgc2hvdWxkIGJlIGEgc3RyaW5nLCBidXQgYFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSwgXCJgIHdhcyBwcm92aWRlZCBpbnN0ZWFkLlxcblxcbkRpZCB5b3UgaW50ZW5kIHRvIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhcHByb2FjaGVzP1xcblxcbmltcG9ydCB7XFx4QTBncmVlbiB9IGZyb20gXFxcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1xcXCI7XFxuXFxuY29uc3QgdGhlbWUxID0gY3JlYXRlTXVpVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiBncmVlbixcXG59IH0pO1xcblxcbmNvbnN0IHRoZW1lMiA9IGNyZWF0ZU11aVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogeyBtYWluOiBncmVlbls1MDBdIH0sXFxufSB9KTtcIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDUsIEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pKSk7XG4gICAgfVxuXG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdsaWdodCcsIGxpZ2h0U2hhZGUsIHRvbmFsT2Zmc2V0KTtcbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2RhcmsnLCBkYXJrU2hhZGUsIHRvbmFsT2Zmc2V0KTtcblxuICAgIGlmICghY29sb3IuY29udHJhc3RUZXh0KSB7XG4gICAgICBjb2xvci5jb250cmFzdFRleHQgPSBnZXRDb250cmFzdFRleHQoY29sb3IubWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9O1xuXG4gIHZhciB0eXBlcyA9IHtcbiAgICBkYXJrOiBkYXJrLFxuICAgIGxpZ2h0OiBsaWdodFxuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF0eXBlc1t0eXBlXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgcGFsZXR0ZSB0eXBlIGBcIi5jb25jYXQodHlwZSwgXCJgIGlzIG5vdCBzdXBwb3J0ZWQuXCIpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFsZXR0ZU91dHB1dCA9IGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIGNvbW1vbiBjb2xvcnMuXG4gICAgY29tbW9uOiBjb21tb24sXG4gICAgLy8gVGhlIHBhbGV0dGUgdHlwZSwgY2FuIGJlIGxpZ2h0IG9yIGRhcmsuXG4gICAgdHlwZTogdHlwZSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHByaW1hcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgcHJpbWFyeTogYXVnbWVudENvbG9yKHByaW1hcnkpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgc2Vjb25kYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHNlY29uZGFyeTogYXVnbWVudENvbG9yKHNlY29uZGFyeSwgJ0E0MDAnLCAnQTIwMCcsICdBNzAwJyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBpbnRlcmZhY2UgZWxlbWVudHMgdGhhdCB0aGUgdXNlciBzaG91bGQgYmUgbWFkZSBhd2FyZSBvZi5cbiAgICBlcnJvcjogYXVnbWVudENvbG9yKGVycm9yKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHBvdGVudGlhbGx5IGRhbmdlcm91cyBhY3Rpb25zIG9yIGltcG9ydGFudCBtZXNzYWdlcy5cbiAgICB3YXJuaW5nOiBhdWdtZW50Q29sb3Iod2FybmluZyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHByZXNlbnQgaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIgdGhhdCBpcyBuZXV0cmFsIGFuZCBub3QgbmVjZXNzYXJpbHkgaW1wb3J0YW50LlxuICAgIGluZm86IGF1Z21lbnRDb2xvcihpbmZvKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHN1Y2Nlc3NmdWwgY29tcGxldGlvbiBvZiBhbiBhY3Rpb24gdGhhdCB1c2VyIHRyaWdnZXJlZC5cbiAgICBzdWNjZXNzOiBhdWdtZW50Q29sb3Ioc3VjY2VzcyksXG4gICAgLy8gVGhlIGdyZXkgY29sb3JzLlxuICAgIGdyZXk6IGdyZXksXG4gICAgLy8gVXNlZCBieSBgZ2V0Q29udHJhc3RUZXh0KClgIHRvIG1heGltaXplIHRoZSBjb250cmFzdCBiZXR3ZWVuXG4gICAgLy8gdGhlIGJhY2tncm91bmQgYW5kIHRoZSB0ZXh0LlxuICAgIGNvbnRyYXN0VGhyZXNob2xkOiBjb250cmFzdFRocmVzaG9sZCxcbiAgICAvLyBUYWtlcyBhIGJhY2tncm91bmQgY29sb3IgYW5kIHJldHVybnMgdGhlIHRleHQgY29sb3IgdGhhdCBtYXhpbWl6ZXMgdGhlIGNvbnRyYXN0LlxuICAgIGdldENvbnRyYXN0VGV4dDogZ2V0Q29udHJhc3RUZXh0LFxuICAgIC8vIEdlbmVyYXRlIGEgcmljaCBjb2xvciBvYmplY3QuXG4gICAgYXVnbWVudENvbG9yOiBhdWdtZW50Q29sb3IsXG4gICAgLy8gVXNlZCBieSB0aGUgZnVuY3Rpb25zIGJlbG93IHRvIHNoaWZ0IGEgY29sb3IncyBsdW1pbmFuY2UgYnkgYXBwcm94aW1hdGVseVxuICAgIC8vIHR3byBpbmRleGVzIHdpdGhpbiBpdHMgdG9uYWwgcGFsZXR0ZS5cbiAgICAvLyBFLmcuLCBzaGlmdCBmcm9tIFJlZCA1MDAgdG8gUmVkIDMwMCBvciBSZWQgNzAwLlxuICAgIHRvbmFsT2Zmc2V0OiB0b25hbE9mZnNldFxuICB9LCB0eXBlc1t0eXBlXSksIG90aGVyKTtcbiAgcmV0dXJuIHBhbGV0dGVPdXRwdXQ7XG59IiwiaW1wb3J0IHsgY3JlYXRlVW5hcnlTcGFjaW5nIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSc7XG52YXIgd2Fybk9uY2U7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTcGFjaW5nKCkge1xuICB2YXIgc3BhY2luZ0lucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA4O1xuXG4gIC8vIEFscmVhZHkgdHJhbnNmb3JtZWQuXG4gIGlmIChzcGFjaW5nSW5wdXQubXVpKSB7XG4gICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgfSAvLyBNYXRlcmlhbCBEZXNpZ24gbGF5b3V0cyBhcmUgdmlzdWFsbHkgYmFsYW5jZWQuIE1vc3QgbWVhc3VyZW1lbnRzIGFsaWduIHRvIGFuIDhkcCBncmlkIGFwcGxpZWQsIHdoaWNoIGFsaWducyBib3RoIHNwYWNpbmcgYW5kIHRoZSBvdmVyYWxsIGxheW91dC5cbiAgLy8gU21hbGxlciBjb21wb25lbnRzLCBzdWNoIGFzIGljb25zIGFuZCB0eXBlLCBjYW4gYWxpZ24gdG8gYSA0ZHAgZ3JpZC5cbiAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vbGF5b3V0L3VuZGVyc3RhbmRpbmctbGF5b3V0Lmh0bWwjdXNhZ2VcblxuXG4gIHZhciB0cmFuc2Zvcm0gPSBjcmVhdGVVbmFyeVNwYWNpbmcoe1xuICAgIHNwYWNpbmc6IHNwYWNpbmdJbnB1dFxuICB9KTtcblxuICB2YXIgc3BhY2luZyA9IGZ1bmN0aW9uIHNwYWNpbmcoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShhcmdzLmxlbmd0aCA8PSA0KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRvbyBtYW55IGFyZ3VtZW50cyBwcm92aWRlZCwgZXhwZWN0ZWQgYmV0d2VlbiAwIGFuZCA0LCBnb3QgXCIuY29uY2F0KGFyZ3MubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKDEpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShhcmdzWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYXJndW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXRwdXQgPSB0cmFuc2Zvcm0oYXJndW1lbnQpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQob3V0cHV0LCBcInB4XCIpIDogb3V0cHV0O1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTsgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdG8gcmVtb3ZlIGluIHY1LlxuXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwYWNpbmcsICd1bml0Jywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCF3YXJuT25jZSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB0aGVtZS5zcGFjaW5nLnVuaXQgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4nLCAnSXQgd2lsbCBiZSByZW1vdmVkIGluIHY1LicsICdZb3UgY2FuIHJlcGxhY2UgYHRoZW1lLnNwYWNpbmcudW5pdCAqIHlgIHdpdGggYHRoZW1lLnNwYWNpbmcoeSlgLicsICcnLCAnWW91IGNhbiB1c2UgdGhlIGBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS90cmVlL21hc3Rlci9wYWNrYWdlcy9tYXRlcmlhbC11aS1jb2RlbW9kL1JFQURNRS5tZCN0aGVtZS1zcGFjaW5nLWFwaWAgbWlncmF0aW9uIGhlbHBlciB0byBtYWtlIHRoZSBwcm9jZXNzIHNtb290aGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhcm5PbmNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgICB9XG4gIH0pO1xuICBzcGFjaW5nLm11aSA9IHRydWU7XG4gIHJldHVybiBzcGFjaW5nO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0eWxlcyBhcyBjcmVhdGVTdHlsZXNPcmlnaW5hbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyAvLyBsZXQgd2Fybk9uY2UgPSBmYWxzZTtcbi8vIFRvIHJlbW92ZSBpbiB2NVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIC8vIHdhcm5pbmcoXG4gIC8vICAgd2Fybk9uY2UsXG4gIC8vICAgW1xuICAvLyAgICAgJ01hdGVyaWFsLVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLFxuICAvLyAgICAgJ1BsZWFzZSB1c2UgQG1hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnLFxuICAvLyAgIF0uam9pbignXFxuJyksXG4gIC8vICk7XG4gIC8vIHdhcm5PbmNlID0gdHJ1ZTtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlc09yaWdpbmFsKHN0eWxlcyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgY2FzZUFsbENhcHMgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59O1xudmFyIGRlZmF1bHRGb250RmFtaWx5ID0gJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZic7XG4vKipcbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS90aGUtdHlwZS1zeXN0ZW0uaHRtbH1cbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS91bmRlcnN0YW5kaW5nLXR5cG9ncmFwaHkuaHRtbH1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHkpIHtcbiAgdmFyIF9yZWYgPSB0eXBlb2YgdHlwb2dyYXBoeSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cG9ncmFwaHkocGFsZXR0ZSkgOiB0eXBvZ3JhcGh5LFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gZGVmYXVsdEZvbnRGYW1pbHkgOiBfcmVmJGZvbnRGYW1pbHksXG4gICAgICBfcmVmJGZvbnRTaXplID0gX3JlZi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplID0gX3JlZiRmb250U2l6ZSA9PT0gdm9pZCAwID8gMTQgOiBfcmVmJGZvbnRTaXplLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TGlnaHQgPSBfcmVmLmZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRXZWlnaHRMaWdodCA9IF9yZWYkZm9udFdlaWdodExpZ2h0ID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9IF9yZWYuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250V2VpZ2h0UmVndWxhciA9IF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9PT0gdm9pZCAwID8gNDAwIDogX3JlZiRmb250V2VpZ2h0UmVndWxhLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TWVkaXVtID0gX3JlZi5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFdlaWdodE1lZGl1bSA9IF9yZWYkZm9udFdlaWdodE1lZGl1bSA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgX3JlZiRmb250V2VpZ2h0Qm9sZCA9IF9yZWYuZm9udFdlaWdodEJvbGQsXG4gICAgICBmb250V2VpZ2h0Qm9sZCA9IF9yZWYkZm9udFdlaWdodEJvbGQgPT09IHZvaWQgMCA/IDcwMCA6IF9yZWYkZm9udFdlaWdodEJvbGQsXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHZvaWQgMCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBhbGxWYXJpYW50cyA9IF9yZWYuYWxsVmFyaWFudHMsXG4gICAgICBweFRvUmVtMiA9IF9yZWYucHhUb1JlbSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRXZWlnaHRMaWdodFwiLCBcImZvbnRXZWlnaHRSZWd1bGFyXCIsIFwiZm9udFdlaWdodE1lZGl1bVwiLCBcImZvbnRXZWlnaHRCb2xkXCIsIFwiaHRtbEZvbnRTaXplXCIsIFwiYWxsVmFyaWFudHNcIiwgXCJweFRvUmVtXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgZm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGh0bWxGb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgaHRtbEZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29lZiA9IGZvbnRTaXplIC8gMTQ7XG5cbiAgdmFyIHB4VG9SZW0gPSBweFRvUmVtMiB8fCBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzaXplIC8gaHRtbEZvbnRTaXplICogY29lZiwgXCJyZW1cIik7XG4gIH07XG5cbiAgdmFyIGJ1aWxkVmFyaWFudCA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFudChmb250V2VpZ2h0LCBzaXplLCBsaW5lSGVpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBjYXNpbmcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZTogcHhUb1JlbShzaXplKSxcbiAgICAgIC8vIFVuaXRsZXNzIGZvbGxvd2luZyBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rob3VnaHRzLzIwMDYvMDIvMDgvdW5pdGxlc3MtbGluZS1oZWlnaHRzL1xuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodFxuICAgIH0sIGZvbnRGYW1pbHkgPT09IGRlZmF1bHRGb250RmFtaWx5ID8ge1xuICAgICAgbGV0dGVyU3BhY2luZzogXCJcIi5jb25jYXQocm91bmQobGV0dGVyU3BhY2luZyAvIHNpemUpLCBcImVtXCIpXG4gICAgfSA6IHt9LCBjYXNpbmcsIGFsbFZhcmlhbnRzKTtcbiAgfTtcblxuICB2YXIgdmFyaWFudHMgPSB7XG4gICAgaDE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDk2LCAxLjE2NywgLTEuNSksXG4gICAgaDI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDYwLCAxLjIsIC0wLjUpLFxuICAgIGgzOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDQ4LCAxLjE2NywgMCksXG4gICAgaDQ6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMzQsIDEuMjM1LCAwLjI1KSxcbiAgICBoNTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAyNCwgMS4zMzQsIDApLFxuICAgIGg2OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMjAsIDEuNiwgMC4xNSksXG4gICAgc3VidGl0bGUxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjc1LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS41NywgMC4xKSxcbiAgICBib2R5MTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS41LCAwLjE1KSxcbiAgICBib2R5MjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNCwgMS40MywgMC4xNSksXG4gICAgYnV0dG9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNzUsIDAuNCwgY2FzZUFsbENhcHMpLFxuICAgIGNhcHRpb246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDEuNjYsIDAuNCksXG4gICAgb3ZlcmxpbmU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDIuNjYsIDEsIGNhc2VBbGxDYXBzKVxuICB9O1xuICByZXR1cm4gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICBodG1sRm9udFNpemU6IGh0bWxGb250U2l6ZSxcbiAgICBweFRvUmVtOiBweFRvUmVtLFxuICAgIHJvdW5kOiByb3VuZCxcbiAgICAvLyBUT0RPIHY1OiByZW1vdmVcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IGZvbnRXZWlnaHRMaWdodCxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFdlaWdodE1lZGl1bTogZm9udFdlaWdodE1lZGl1bSxcbiAgICBmb250V2VpZ2h0Qm9sZDogZm9udFdlaWdodEJvbGRcbiAgfSwgdmFyaWFudHMpLCBvdGhlciwge1xuICAgIGNsb25lOiBmYWxzZSAvLyBObyBuZWVkIHRvIGNsb25lIGRlZXBcblxuICB9KTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5pdGxlc3ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKSkubGVuZ3RoID09PSBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn0gLy8gUG9ydGVkIGZyb20gQ29tcGFzc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0NvbXBhc3MvY29tcGFzcy9ibG9iL21hc3Rlci9jb3JlL3N0eWxlc2hlZXRzL2NvbXBhc3MvdHlwb2dyYXBoeS9fdW5pdHMuc2Nzc1xuLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pdChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0KS5tYXRjaCgvW1xcZC5cXC0rXSpcXHMqKC4qKS8pWzFdIHx8ICcnO1xufSAvLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdGxlc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml0bGVzcyhsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobGVuZ3RoKTtcbn0gLy8gQ29udmVydCBhbnkgQ1NTIDxsZW5ndGg+IG9yIDxwZXJjZW50YWdlPiB2YWx1ZSB0byBhbnkgYW5vdGhlci5cbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0t5bGVBTWF0aGV3cy9jb252ZXJ0LWNzcy1sZW5ndGhcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgoYmFzZUZvbnRTaXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobGVuZ3RoLCB0b1VuaXQpIHtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGxlbmd0aCk7IC8vIE9wdGltaXplIGZvciBjYXNlcyB3aGVyZSBgZnJvbWAgYW5kIGB0b2AgdW5pdHMgYXJlIGFjY2lkZW50YWxseSB0aGUgc2FtZS5cblxuICAgIGlmIChmcm9tVW5pdCA9PT0gdG9Vbml0KSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0gLy8gQ29udmVydCBpbnB1dCBsZW5ndGggdG8gcGl4ZWxzLlxuXG5cbiAgICB2YXIgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCk7XG5cbiAgICBpZiAoZnJvbVVuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmIChmcm9tVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAoZnJvbVVuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH0gLy8gQ29udmVydCBsZW5ndGggaW4gcGl4ZWxzIHRvIHRoZSBvdXRwdXQgdW5pdFxuXG5cbiAgICB2YXIgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGg7XG5cbiAgICBpZiAodG9Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAodG9Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmICh0b1VuaXQgPT09ICdyZW0nKSB7XG4gICAgICAgIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoIC8gdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGbG9hdChvdXRwdXRMZW5ndGgudG9GaXhlZCg1KSkgKyB0b1VuaXQ7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Qcm9wZXJ0eShfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgZ3JpZCA9IF9yZWYuZ3JpZDtcbiAgdmFyIHNpemVCZWxvdyA9IHNpemUgLSBzaXplICUgZ3JpZDtcbiAgdmFyIHNpemVBYm92ZSA9IHNpemVCZWxvdyArIGdyaWQ7XG4gIHJldHVybiBzaXplIC0gc2l6ZUJlbG93IDwgc2l6ZUFib3ZlIC0gc2l6ZSA/IHNpemVCZWxvdyA6IHNpemVBYm92ZTtcbn0gLy8gZm9udEdyaWQgZmluZHMgYSBtaW5pbWFsIGdyaWQgKGluIHJlbSkgZm9yIHRoZSBmb250U2l6ZSB2YWx1ZXMgc28gdGhhdCB0aGVcbi8vIGxpbmVIZWlnaHQgZmFsbHMgdW5kZXIgYSB4IHBpeGVscyBncmlkLCA0cHggaW4gdGhlIGNhc2Ugb2YgTWF0ZXJpYWwgRGVzaWduLFxuLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgcmVsYXRpdmUgbGluZSBoZWlnaHRcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRHcmlkKF9yZWYyKSB7XG4gIHZhciBsaW5lSGVpZ2h0ID0gX3JlZjIubGluZUhlaWdodCxcbiAgICAgIHBpeGVscyA9IF9yZWYyLnBpeGVscyxcbiAgICAgIGh0bWxGb250U2l6ZSA9IF9yZWYyLmh0bWxGb250U2l6ZTtcbiAgcmV0dXJuIHBpeGVscyAvIChsaW5lSGVpZ2h0ICogaHRtbEZvbnRTaXplKTtcbn1cbi8qKlxuICogZ2VuZXJhdGUgYSByZXNwb25zaXZlIHZlcnNpb24gb2YgYSBnaXZlbiBDU1MgcHJvcGVydHlcbiAqIEBleGFtcGxlXG4gKiByZXNwb25zaXZlUHJvcGVydHkoe1xuICogICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAqICAgbWluOiAxNSxcbiAqICAgbWF4OiAyMCxcbiAqICAgdW5pdDogJ3B4JyxcbiAqICAgYnJlYWtwb2ludHM6IFszMDAsIDYwMF0sXG4gKiB9KVxuICpcbiAqIC8vIHRoaXMgcmV0dXJuc1xuICpcbiAqIHtcbiAqICAgZm9udFNpemU6ICcxNXB4JyxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjMwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzE3LjVweCcsXG4gKiAgIH0sXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDo2MDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAqICAgfSxcbiAqIH1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNzc1Byb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSB0byBiZSBtYWRlIHJlc3BvbnNpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWluIC0gVGhlIHNtYWxsZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMubWF4IC0gVGhlIGxhcmdlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudW5pdF0gLSBUaGUgdW5pdCB0byBiZSB1c2VkIGZvciB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge0FycmF5Lm51bWJlcn0gW3BhcmFtcy5icmVha3BvaW50c10gIC0gQW4gYXJyYXkgb2YgYnJlYWtwb2ludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmFsaWduU3RlcF0gLSBSb3VuZCBzY2FsZWQgdmFsdWUgdG8gZmFsbCB1bmRlciB0aGlzIGdyaWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHJlc3BvbnNpdmUgc3R5bGVzIGZvciB7cGFyYW1zLmNzc1Byb3BlcnR5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvcGVydHkoX3JlZjMpIHtcbiAgdmFyIGNzc1Byb3BlcnR5ID0gX3JlZjMuY3NzUHJvcGVydHksXG4gICAgICBtaW4gPSBfcmVmMy5taW4sXG4gICAgICBtYXggPSBfcmVmMy5tYXgsXG4gICAgICBfcmVmMyR1bml0ID0gX3JlZjMudW5pdCxcbiAgICAgIHVuaXQgPSBfcmVmMyR1bml0ID09PSB2b2lkIDAgPyAncmVtJyA6IF9yZWYzJHVuaXQsXG4gICAgICBfcmVmMyRicmVha3BvaW50cyA9IF9yZWYzLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfcmVmMyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWzYwMCwgOTYwLCAxMjgwXSA6IF9yZWYzJGJyZWFrcG9pbnRzLFxuICAgICAgX3JlZjMkdHJhbnNmb3JtID0gX3JlZjMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZjMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkdHJhbnNmb3JtO1xuXG4gIHZhciBvdXRwdXQgPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChtaW4pLmNvbmNhdCh1bml0KSk7XG5cbiAgdmFyIGZhY3RvciA9IChtYXggLSBtaW4pIC8gYnJlYWtwb2ludHNbYnJlYWtwb2ludHMubGVuZ3RoIC0gMV07XG4gIGJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBtaW4gKyBmYWN0b3IgKiBicmVha3BvaW50O1xuXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIG91dHB1dFtcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdChicmVha3BvaW50LCBcInB4KVwiKV0gPSBfZGVmaW5lUHJvcGVydHkoe30sIGNzc1Byb3BlcnR5LCBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHZhbHVlICogMTAwMDApIC8gMTAwMDApLmNvbmNhdCh1bml0KSk7XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufSIsImltcG9ydCBjcmVhdGVNdWlUaGVtZSBmcm9tICcuL2NyZWF0ZU11aVRoZW1lJztcbnZhciBkZWZhdWx0VGhlbWUgPSBjcmVhdGVNdWlUaGVtZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRoZW1lOyIsImV4cG9ydCAqIGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVNdWlUaGVtZSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN0eWxlcyB9IGZyb20gJy4vY3JlYXRlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFrZVN0eWxlcyB9IGZyb20gJy4vbWFrZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3BvbnNpdmVGb250U2l6ZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmVGb250U2l6ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHlsZWQgfSBmcm9tICcuL3N0eWxlZCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVGhlbWUgfSBmcm9tICcuL3VzZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFN0eWxlcyB9IGZyb20gJy4vd2l0aFN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vd2l0aFRoZW1lJztcbmV4cG9ydCB7IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLCBqc3NQcmVzZXQsIFNlcnZlclN0eWxlU2hlZXRzLCBTdHlsZXNQcm92aWRlciwgVGhlbWVQcm92aWRlciBhcyBNdWlUaGVtZVByb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIGFzIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIG1ha2VTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGlzVW5pdGxlc3MsIGNvbnZlcnRMZW5ndGgsIHJlc3BvbnNpdmVQcm9wZXJ0eSwgYWxpZ25Qcm9wZXJ0eSwgZm9udEdyaWQgfSBmcm9tICcuL2Nzc1V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWVJbnB1dCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbJ3NtJywgJ21kJywgJ2xnJ10gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJGRpc2FibGVBbGlnbiA9IG9wdGlvbnMuZGlzYWJsZUFsaWduLFxuICAgICAgZGlzYWJsZUFsaWduID0gX29wdGlvbnMkZGlzYWJsZUFsaWduID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGRpc2FibGVBbGlnbixcbiAgICAgIF9vcHRpb25zJGZhY3RvciA9IG9wdGlvbnMuZmFjdG9yLFxuICAgICAgZmFjdG9yID0gX29wdGlvbnMkZmFjdG9yID09PSB2b2lkIDAgPyAyIDogX29wdGlvbnMkZmFjdG9yLFxuICAgICAgX29wdGlvbnMkdmFyaWFudHMgPSBvcHRpb25zLnZhcmlhbnRzLFxuICAgICAgdmFyaWFudHMgPSBfb3B0aW9ucyR2YXJpYW50cyA9PT0gdm9pZCAwID8gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJywgJ2JvZHkxJywgJ2JvZHkyJywgJ2NhcHRpb24nLCAnYnV0dG9uJywgJ292ZXJsaW5lJ10gOiBfb3B0aW9ucyR2YXJpYW50cztcblxuICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgdGhlbWVJbnB1dCk7XG5cbiAgdGhlbWUudHlwb2dyYXBoeSA9IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5KTtcbiAgdmFyIHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5OyAvLyBDb252ZXJ0IGJldHdlZW4gY3NzIGxlbmd0aHMgZS5nLiBlbS0+cHggb3IgcHgtPnJlbVxuICAvLyBTZXQgdGhlIGJhc2VGb250U2l6ZSBmb3IgeW91ciBwcm9qZWN0LiBEZWZhdWx0cyB0byAxNnB4IChhbHNvIHRoZSBicm93c2VyIGRlZmF1bHQpLlxuXG4gIHZhciBjb252ZXJ0ID0gY29udmVydExlbmd0aCh0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSk7XG4gIHZhciBicmVha3BvaW50VmFsdWVzID0gYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlc1t4XTtcbiAgfSk7XG4gIHZhcmlhbnRzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhbnQpIHtcbiAgICB2YXIgc3R5bGUgPSB0eXBvZ3JhcGh5W3ZhcmlhbnRdO1xuICAgIHZhciByZW1Gb250U2l6ZSA9IHBhcnNlRmxvYXQoY29udmVydChzdHlsZS5mb250U2l6ZSwgJ3JlbScpKTtcblxuICAgIGlmIChyZW1Gb250U2l6ZSA8PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1heEZvbnRTaXplID0gcmVtRm9udFNpemU7XG4gICAgdmFyIG1pbkZvbnRTaXplID0gMSArIChtYXhGb250U2l6ZSAtIDEpIC8gZmFjdG9yO1xuICAgIHZhciBsaW5lSGVpZ2h0ID0gc3R5bGUubGluZUhlaWdodDtcblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSAmJiAhZGlzYWJsZUFsaWduKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgbm9uLXVuaXRsZXNzIGxpbmUgaGVpZ2h0IHdpdGggZ3JpZCBhbGlnbm1lbnQuXFxuVXNlIHVuaXRsZXNzIGxpbmUgaGVpZ2h0cyBpbnN0ZWFkLlwiIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg2KSk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpKSB7XG4gICAgICAvLyBtYWtlIGl0IHVuaXRsZXNzXG4gICAgICBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChjb252ZXJ0KGxpbmVIZWlnaHQsICdyZW0nKSkgLyBwYXJzZUZsb2F0KHJlbUZvbnRTaXplKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGlmICghZGlzYWJsZUFsaWduKSB7XG4gICAgICB0cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFsaWduUHJvcGVydHkoe1xuICAgICAgICAgIHNpemU6IHZhbHVlLFxuICAgICAgICAgIGdyaWQ6IGZvbnRHcmlkKHtcbiAgICAgICAgICAgIHBpeGVsczogNCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQsXG4gICAgICAgICAgICBodG1sRm9udFNpemU6IHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHR5cG9ncmFwaHlbdmFyaWFudF0gPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gICAgICBjc3NQcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICAgIG1pbjogbWluRm9udFNpemUsXG4gICAgICBtYXg6IG1heEZvbnRTaXplLFxuICAgICAgdW5pdDogJ3JlbScsXG4gICAgICBicmVha3BvaW50czogYnJlYWtwb2ludFZhbHVlcyxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHRoZW1lO1xufSIsInZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG5leHBvcnQgZGVmYXVsdCBzaGFkb3dzOyIsInZhciBzaGFwZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiA0XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hhcGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBzdHlsZWQgYXMgc3R5bGVkV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG52YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50Q3JlYXRvciA9IHN0eWxlZFdpdGhvdXREZWZhdWx0KENvbXBvbmVudCk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcihzdHlsZSwgX2V4dGVuZHMoe1xuICAgICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgICB9LCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmdvb2dsZS5jb20vbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbi8vIHRvIGxlYXJuIHRoZSBjb250ZXh0IGluIHdoaWNoIGVhY2ggZWFzaW5nIHNob3VsZCBiZSB1c2VkLlxuZXhwb3J0IHZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgc2hvcnRlc3Q6IDE1MCxcbiAgc2hvcnRlcjogMjAwLFxuICBzaG9ydDogMjUwLFxuICAvLyBtb3N0IGJhc2ljIHJlY29tbWVuZGVkIHRpbWluZ1xuICBzdGFuZGFyZDogMzAwLFxuICAvLyB0aGlzIGlzIHRvIGJlIHVzZWQgaW4gY29tcGxleCBhbmltYXRpb25zXG4gIGNvbXBsZXg6IDM3NSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgZW50ZXJpbmcgc2NyZWVuXG4gIGVudGVyaW5nU2NyZWVuOiAyMjUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGxlYXZpbmcgc2NyZWVuXG4gIGxlYXZpbmdTY3JlZW46IDE5NVxufTtcblxuZnVuY3Rpb24gZm9ybWF0TXMobWlsbGlzZWNvbmRzKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyksIFwibXNcIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ucHJvcFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmR1cmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZGVsYXlcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzaW5nOiBlYXNpbmcsXG4gIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2FsbCddO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uT3B0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IGR1cmF0aW9uLnN0YW5kYXJkIDogX29wdGlvbnMkZHVyYXRpb24sXG4gICAgICAgIF9vcHRpb25zJGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICBlYXNpbmdPcHRpb24gPSBfb3B0aW9ucyRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2luZy5lYXNlSW5PdXQgOiBfb3B0aW9ucyRlYXNpbmcsXG4gICAgICAgIF9vcHRpb25zJGRlbGF5ID0gb3B0aW9ucy5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfb3B0aW9ucyRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGRlbGF5LFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkdXJhdGlvblwiLCBcImVhc2luZ1wiLCBcImRlbGF5XCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH07XG5cbiAgICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwcm9wcykgJiYgIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcInByb3BzXCIgbXVzdCBiZSBhIHN0cmluZyBvciBBcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkdXJhdGlvbk9wdGlvbikgJiYgIWlzU3RyaW5nKGR1cmF0aW9uT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFxcXCJkdXJhdGlvblxcXCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBidXQgZm91bmQgXCIuY29uY2F0KGR1cmF0aW9uT3B0aW9uLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RyaW5nKGVhc2luZ09wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZWFzaW5nXCIgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkZWxheSkgJiYgIWlzU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJkZWxheVwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVW5yZWNvZ25pemVkIGFyZ3VtZW50KHMpIFtcIi5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIpLmpvaW4oJywnKSwgXCJdLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXSkubWFwKGZ1bmN0aW9uIChhbmltYXRlZFByb3ApIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhbmltYXRlZFByb3AsIFwiIFwiKS5jb25jYXQodHlwZW9mIGR1cmF0aW9uT3B0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uT3B0aW9uIDogZm9ybWF0TXMoZHVyYXRpb25PcHRpb24pLCBcIiBcIikuY29uY2F0KGVhc2luZ09wdGlvbiwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnID8gZGVsYXkgOiBmb3JtYXRNcyhkZWxheSkpO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSxcbiAgZ2V0QXV0b0hlaWdodER1cmF0aW9uOiBmdW5jdGlvbiBnZXRBdXRvSGVpZ2h0RHVyYXRpb24oaGVpZ2h0KSB7XG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBjb25zdGFudCA9IGhlaWdodCAvIDM2OyAvLyBodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPSg0KyUyQisxNSsqKyh4KyUyRiszNispKyoqKzAuMjUrJTJCKyh4KyUyRiszNikrJTJGKzUpKyorMTBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCg0ICsgMTUgKiBNYXRoLnBvdyhjb25zdGFudCwgMC4yNSkgKyBjb25zdGFudCAvIDUpICogMTApO1xuICB9XG59OyIsImltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZVdpdGhvdXREZWZhdWx0KCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIGFzIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB3aXRoU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsImltcG9ydCB7IHdpdGhUaGVtZUNyZWF0b3IgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3Ioe1xuICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWU7IiwiLy8gV2UgbmVlZCB0byBjZW50cmFsaXplIHRoZSB6SW5kZXggZGVmaW5pdGlvbnMgYXMgdGhleSB3b3JrXG4vLyBsaWtlIGdsb2JhbCB2YWx1ZXMgaW4gdGhlIGJyb3dzZXIuXG52YXIgekluZGV4ID0ge1xuICBtb2JpbGVTdGVwcGVyOiAxMDAwLFxuICBzcGVlZERpYWw6IDEwNTAsXG4gIGFwcEJhcjogMTEwMCxcbiAgZHJhd2VyOiAxMjAwLFxuICBtb2RhbDogMTMwMCxcbiAgc25hY2tiYXI6IDE0MDAsXG4gIHRvb2x0aXA6IDE1MDBcbn07XG5leHBvcnQgZGVmYXVsdCB6SW5kZXg7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG4vLyBJdCBzaG91bGQgdG8gYmUgbm90ZWQgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzbid0IGVxdWl2YWxlbnQgdG8gYHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplYC5cbi8vXG4vLyBBIHN0cmljdCBjYXBpdGFsaXphdGlvbiBzaG91bGQgdXBwZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGEgdGhlIHNlbnRlbmNlLlxuLy8gV2Ugb25seSBoYW5kbGUgdGhlIGZpcnN0IHdvcmQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogY2FwaXRhbGl6ZShzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgdGFibGU6IHtcbiAgICAgICAgbWluV2lkdGg6IDY1MCxcbiAgICB9LFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgZGVzY3JpcHRpb24sIHN0YXR1cykge1xuICAgIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBzdGF0dXMgfTtcbn1cblxuY29uc3Qgcm93cyA9IFtcbiAgICBjcmVhdGVEYXRhKCdDb21tYW5kJywgJ0Rlc2NyaXB0aW9uJywgdHJ1ZSksXG4gICAgY3JlYXRlRGF0YSgnQ29tbWFuZCcsICdEZXNjcmlwdGlvbicsIHRydWUpLFxuICAgIGNyZWF0ZURhdGEoJ0NvbW1hbmQnLCAnRGVzY3JpcHRpb24nLCB0cnVlKSxcbiAgICBjcmVhdGVEYXRhKCdDb21tYW5kJywgJ0Rlc2NyaXB0aW9uJywgdHJ1ZSksXG5dO1xuXG5mdW5jdGlvbiBjb21tYW5kcygpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gc3R5bGU9e3sgYmFja2dyb3VuZDogJyMxRjFCMjQnIH19PlxuICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5Db21tYW5kczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5TdGF0dXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19Pntyb3cuZGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT57cm93LnN0YXR1cyA/ICdPbmxpbmUnIDogJ09mZmxpbmUnfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=