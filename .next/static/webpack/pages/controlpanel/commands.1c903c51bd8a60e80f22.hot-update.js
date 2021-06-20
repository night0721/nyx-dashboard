self["webpackHotUpdate_N_E"]("pages/controlpanel/commands",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, stickyHeader && classes.stickyHeader)
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(align))], padding !== 'default' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className)
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
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
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, tablelvl2 && {
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

/***/ "./pages/controlpanel/commands.js":
/*!****************************************!*\
  !*** ./pages/controlpanel/commands.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/qt-coder/cath.gq/pages/controlpanel/commands.js",
    _s = $RefreshSig$();










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    minWidth: 650
  }
});

function createData(name, description, status) {
  return {
    name: name,
    description: description,
    status: status
  };
}

var rows = [createData('Command', 'Description', true)];

function BasicTable() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "simple table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: "Commands"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(BasicTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = BasicTable;

function commands() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommandTable, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (commands);

var _c;

$RefreshReg$(_c, "BasicTable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZS9UYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZS9UYWJsZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFibGUvVGFibGVsdmwyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZUJvZHkvVGFibGVCb2R5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYmxlQ2VsbC9UYWJsZUNlbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFibGVDb250YWluZXIvVGFibGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFibGVIZWFkL1RhYmxlSGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJsZVJvdy9UYWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJvbHBhbmVsL2NvbW1hbmRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIlBhcGVyIiwibWFwIiwicm93IiwiY29tbWFuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEY7QUFDaEM7QUFDM0I7QUFDSTtBQUNYO0FBQ3NCO0FBQ0o7QUFDbkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyRUFBUSxHQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsNERBQTRELEtBQUs7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkZBQXdCOztBQUV0QyxjQUFjLDBDQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLGdEQUFtQixDQUFDLDJEQUFxQjtBQUMvRDtBQUNBLEdBQUcsZUFBZSxnREFBbUIsWUFBWSwyRUFBUTtBQUN6RDtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQixHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQXlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQTJCOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFnQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtEQUVDOztBQUVkO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQWU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWU7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWM7QUFDOUIsQ0FBQyxHQUFHLENBQU07QUFDViwrREFBZSwyREFBVTtBQUN6QjtBQUNBLENBQUMsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQ3RHc0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnREFBbUI7O0FBRXRDLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSwrREFBZSxZQUFZLEU7Ozs7Ozs7Ozs7Ozs7O0FDWEk7QUFDL0I7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixnREFBbUI7O0FBRTFDLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSwrREFBZSxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gyQjtBQUNnQztBQUMzRDtBQUNJO0FBQ1g7QUFDc0I7QUFDVztBQUNsRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJGQUF3Qjs7QUFFdEMsc0JBQXNCLGdEQUFtQixDQUFDLHFFQUF5QjtBQUNuRTtBQUNBLEdBQUcsZUFBZSxnREFBbUIsWUFBWSwyRUFBUTtBQUN6RCxlQUFlLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBMkI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQWdCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0RBRUM7QUFDZCxDQUFDLEdBQUcsQ0FBTTtBQUNWLCtEQUFlLDJEQUFVO0FBQ3pCO0FBQ0EsQ0FBQyxZQUFZLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRDZFO0FBQ2hDO0FBQzNCO0FBQ0k7QUFDWDtBQUNzQjtBQUNEO0FBQ3NCO0FBQ2xCO0FBQ1E7QUFDbEQ7QUFDUDtBQUNBO0FBQ0EsVUFBVSwyRUFBUSxHQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGlFQUFPLENBQUMsOERBQUksb0NBQW9DLGdFQUFNLENBQUMsOERBQUk7QUFDekk7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qiw2Q0FBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJGQUF3Qjs7QUFFdEMsY0FBYyw2Q0FBZ0IsQ0FBQyx3REFBWTtBQUMzQyxrQkFBa0IsNkNBQWdCLENBQUMsNERBQWdCO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBbUIsWUFBWSwyRUFBUTtBQUM3RDtBQUNBLGVBQWUsNkNBQUksMEZBQTBGLDBEQUFVLDZEQUE2RCwwREFBVSx3REFBd0QsMERBQVU7QUFDaFE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVEQUFlOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMERBQWdCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFnQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtEQUVDOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBZTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUywwREFBZ0I7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBZTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQWU7QUFDMUIsQ0FBQyxHQUFHLENBQU07QUFDViwrREFBZSwyREFBVTtBQUN6QjtBQUNBLENBQUMsWUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTzZDO0FBQ2dDO0FBQzNEO0FBQ0k7QUFDWDtBQUNzQjtBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw2Q0FBZ0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJGQUF3Qjs7QUFFdEMsc0JBQXNCLGdEQUFtQixZQUFZLDJFQUFRO0FBQzdEO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQixHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBMkI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQWdCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0RBRUM7QUFDZCxDQUFDLEdBQUcsQ0FBTTtBQUNWLCtEQUFlLDJEQUFVO0FBQ3pCO0FBQ0EsQ0FBQyxpQkFBaUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEd0M7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQ3NCO0FBQ1c7QUFDbEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyRkFBd0I7O0FBRXRDLHNCQUFzQixnREFBbUIsQ0FBQyxxRUFBeUI7QUFDbkU7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CLFlBQVksMkVBQVE7QUFDekQsZUFBZSw2Q0FBSTtBQUNuQjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQTJCOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFnQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtEQUVDO0FBQ2QsQ0FBQyxHQUFHLENBQU07QUFDViwrREFBZSwyREFBVTtBQUN6QjtBQUNBLENBQUMsWUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNENkM7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQ3NCO0FBQ1c7QUFDUDtBQUMzQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EseUJBQXlCLDhEQUFJO0FBQzdCO0FBQ0EsS0FBSzs7QUFFTCw4REFBOEQsS0FBSztBQUNuRSxnQkFBZ0I7O0FBRWhCLDJEQUEyRCxLQUFLO0FBQ2hFLGFBQWE7O0FBRWI7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsNkNBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJGQUF3Qjs7QUFFdEMsa0JBQWtCLDZDQUFnQixDQUFDLDREQUFnQjtBQUNuRCxzQkFBc0IsZ0RBQW1CLFlBQVksMkVBQVE7QUFDN0Q7QUFDQSxlQUFlLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBMkI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQWdCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0RBRUM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBYzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBYztBQUMxQixDQUFDLEdBQUcsQ0FBTTtBQUNWLCtEQUFlLDJEQUFVO0FBQ3pCO0FBQ0EsQ0FBQyxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxPQUFLLEVBQUU7QUFDSEMsWUFBUSxFQUFFO0FBRFA7QUFEa0IsQ0FBRCxDQUE1Qjs7QUFNQSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQkMsV0FBMUIsRUFBdUNDLE1BQXZDLEVBQStDO0FBQzNDLFNBQU87QUFBRUYsUUFBSSxFQUFKQSxJQUFGO0FBQVFDLGVBQVcsRUFBWEEsV0FBUjtBQUFxQkMsVUFBTSxFQUFOQTtBQUFyQixHQUFQO0FBQ0g7O0FBRUQsSUFBTUMsSUFBSSxHQUFHLENBQ1RKLFVBQVUsQ0FBQyxTQUFELEVBQVksYUFBWixFQUEyQixJQUEzQixDQURELENBQWI7O0FBSUEsU0FBU0ssVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQSxzQkFDSSw4REFBQyxxRUFBRDtBQUFnQixhQUFTLEVBQUVXLDREQUEzQjtBQUFBLDJCQUNJLDhEQUFDLDREQUFEO0FBQU8sZUFBUyxFQUFFRCxPQUFPLENBQUNSLEtBQTFCO0FBQWlDLG9CQUFXLGNBQTVDO0FBQUEsOEJBQ0ksOERBQUMsZ0VBQUQ7QUFBQSwrQkFDSSw4REFBQywrREFBRDtBQUFBLGtDQUNJLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0ksOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVFJLDhEQUFDLGdFQUFEO0FBQUEsa0JBQ0tNLElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSw4QkFDTiw4REFBQywrREFBRDtBQUFBLG9DQUNJLDhEQUFDLGdFQUFEO0FBQVcsdUJBQVMsRUFBQyxJQUFyQjtBQUEwQixtQkFBSyxFQUFDLEtBQWhDO0FBQUEsd0JBQ0tBLEdBQUcsQ0FBQ1I7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUksOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCUSxHQUFHLENBQUNQO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFLSSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJPLEdBQUcsQ0FBQ047QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBLGFBQWVNLEdBQUcsQ0FBQ1IsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETTtBQUFBLFNBQVQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIOztHQTNCUUksVTtVQUNXVCxTOzs7S0FEWFMsVTs7QUE4QlQsU0FBU0ssUUFBVCxHQUFvQjtBQUNoQixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztBQUVELCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRyb2xwYW5lbC9jb21tYW5kcy4xYzkwM2M1MWJkOGE2MGU4MGYyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFRhYmxlQ29udGV4dCBmcm9tICcuL1RhYmxlQ29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6IDAsXG4gICAgICAnJiBjYXB0aW9uJzogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHtcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBjYXB0aW9uU2lkZTogJ2JvdHRvbSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0aWNreUhlYWRlcj17dHJ1ZX1gLiAqL1xuICAgIHN0aWNreUhlYWRlcjoge1xuICAgICAgYm9yZGVyQ29sbGFwc2U6ICdzZXBhcmF0ZSdcbiAgICB9XG4gIH07XG59O1xudmFyIGRlZmF1bHRDb21wb25lbnQgPSAndGFibGUnO1xudmFyIFRhYmxlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFibGUocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gZGVmYXVsdENvbXBvbmVudCA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkcGFkZGluZyA9IHByb3BzLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX3Byb3BzJHBhZGRpbmcgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRwYWRkaW5nLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgX3Byb3BzJHN0aWNreUhlYWRlciA9IHByb3BzLnN0aWNreUhlYWRlcixcbiAgICAgIHN0aWNreUhlYWRlciA9IF9wcm9wcyRzdGlja3lIZWFkZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHN0aWNreUhlYWRlcixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwicGFkZGluZ1wiLCBcInNpemVcIiwgXCJzdGlja3lIZWFkZXJcIl0pO1xuXG4gIHZhciB0YWJsZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgIHN0aWNreUhlYWRlcjogc3RpY2t5SGVhZGVyXG4gICAgfTtcbiAgfSwgW3BhZGRpbmcsIHNpemUsIHN0aWNreUhlYWRlcl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRhYmxlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IENvbXBvbmVudCA9PT0gZGVmYXVsdENvbXBvbmVudCA/IG51bGwgOiAndGFibGUnLFxuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgc3RpY2t5SGVhZGVyICYmIGNsYXNzZXMuc3RpY2t5SGVhZGVyKVxuICB9LCBvdGhlcikpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFibGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIHRhYmxlLCBub3JtYWxseSBgVGFibGVIZWFkYCBhbmQgYFRhYmxlQm9keWAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIEFsbG93cyBUYWJsZUNlbGxzIHRvIGluaGVyaXQgcGFkZGluZyBvZiB0aGUgVGFibGUuXG4gICAqL1xuICBwYWRkaW5nOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NoZWNrYm94JywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIEFsbG93cyBUYWJsZUNlbGxzIHRvIGluaGVyaXQgc2l6ZSBvZiB0aGUgVGFibGUuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nXSksXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaGVhZGVyIHN0aWNreS5cbiAgICpcbiAgICog4pqg77iPIEl0IGRvZXNuJ3Qgd29yayB3aXRoIElFIDExLlxuICAgKi9cbiAgc3RpY2t5SGVhZGVyOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJsZSdcbn0pKFRhYmxlKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIFRhYmxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGFibGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1RhYmxlQ29udGV4dCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29udGV4dDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIFRhYmxlbHZsMkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRhYmxlbHZsMkNvbnRleHQuZGlzcGxheU5hbWUgPSAnVGFibGVsdmwyQ29udGV4dCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlbHZsMkNvbnRleHQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFRhYmxlbHZsMkNvbnRleHQgZnJvbSAnLi4vVGFibGUvVGFibGVsdmwyQ29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICd0YWJsZS1yb3ctZ3JvdXAnXG4gIH1cbn07XG52YXIgdGFibGVsdmwyID0ge1xuICB2YXJpYW50OiAnYm9keSdcbn07XG52YXIgZGVmYXVsdENvbXBvbmVudCA9ICd0Ym9keSc7XG52YXIgVGFibGVCb2R5ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFibGVCb2R5KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/IGRlZmF1bHRDb21wb25lbnQgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZWx2bDJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRhYmxlbHZsMlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IENvbXBvbmVudCA9PT0gZGVmYXVsdENvbXBvbmVudCA/IG51bGwgOiAncm93Z3JvdXAnXG4gIH0sIG90aGVyKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJsZUJvZHkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgbm9ybWFsbHkgYFRhYmxlUm93YC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGVCb2R5J1xufSkoVGFibGVCb2R5KTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB7IGRhcmtlbiwgZmFkZSwgbGlnaHRlbiB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCBUYWJsZUNvbnRleHQgZnJvbSAnLi4vVGFibGUvVGFibGVDb250ZXh0JztcbmltcG9ydCBUYWJsZWx2bDJDb250ZXh0IGZyb20gJy4uL1RhYmxlL1RhYmxlbHZsMkNvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCB7XG4gICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnaW5oZXJpdCcsXG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBhIHJlbmRlcmluZyBidWcgd2l0aCBzcGFubmVkIGNvbHVtbnMgaW4gQ2hyb21lIDYyLjAuXG4gICAgICAvLyBSZW1vdmVzIHRoZSBhbHBoYSAoc2V0cyBpdCB0byAxKSwgYW5kIGxpZ2h0ZW5zIG9yIGRhcmtlbnMgdGhlIHRoZW1lIGNvbG9yLlxuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZFxcbiAgICBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbGlnaHRlbihmYWRlKHRoZW1lLnBhbGV0dGUuZGl2aWRlciwgMSksIDAuODgpIDogZGFya2VuKGZhZGUodGhlbWUucGFsZXR0ZS5kaXZpZGVyLCAxKSwgMC42OCkpLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBwYWRkaW5nOiAxNlxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImhlYWRcImAgb3IgYGNvbnRleHQudGFibGUuaGVhZGAuICovXG4gICAgaGVhZDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgbGluZUhlaWdodDogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDI0KSxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiYm9keVwiYCBvciBgY29udGV4dC50YWJsZS5ib2R5YC4gKi9cbiAgICBib2R5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImZvb3RlclwiYCBvciBgY29udGV4dC50YWJsZS5mb290ZXJgLiAqL1xuICAgIGZvb3Rlcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICBsaW5lSGVpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMjEpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMilcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIHNpemVTbWFsbDoge1xuICAgICAgcGFkZGluZzogJzZweCAyNHB4IDZweCAxNnB4JyxcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMTZcbiAgICAgIH0sXG4gICAgICAnJiRwYWRkaW5nQ2hlY2tib3gnOiB7XG4gICAgICAgIHdpZHRoOiAyNCxcbiAgICAgICAgLy8gcHJldmVudCB0aGUgY2hlY2tib3ggY29sdW1uIGZyb20gZ3Jvd2luZ1xuICAgICAgICBwYWRkaW5nOiAnMCAxMnB4IDAgMTZweCcsXG4gICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IDEyLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogMTZcbiAgICAgICAgfSxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwYWRkaW5nPVwiY2hlY2tib3hcImAuICovXG4gICAgcGFkZGluZ0NoZWNrYm94OiB7XG4gICAgICB3aWR0aDogNDgsXG4gICAgICAvLyBwcmV2ZW50IHRoZSBjaGVja2JveCBjb2x1bW4gZnJvbSBncm93aW5nXG4gICAgICBwYWRkaW5nOiAnMCAwIDAgNHB4JyxcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcGFkZGluZz1cIm5vbmVcImAuICovXG4gICAgcGFkZGluZ05vbmU6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICBwYWRkaW5nOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwibGVmdFwiYC4gKi9cbiAgICBhbGlnbkxlZnQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwiY2VudGVyXCJgLiAqL1xuICAgIGFsaWduQ2VudGVyOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwicmlnaHRcImAuICovXG4gICAgYWxpZ25SaWdodDoge1xuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImp1c3RpZnlcImAuICovXG4gICAgYWxpZ25KdXN0aWZ5OiB7XG4gICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb250ZXh0LnRhYmxlLnN0aWNreUhlYWRlcj17dHJ1ZX1gLiAqL1xuICAgIHN0aWNreUhlYWRlcjoge1xuICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHpJbmRleDogMixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBUaGUgY29tcG9uZW50IHJlbmRlcnMgYSBgPHRoPmAgZWxlbWVudCB3aGVuIHRoZSBwYXJlbnQgY29udGV4dCBpcyBhIGhlYWRlclxuICogb3Igb3RoZXJ3aXNlIGEgYDx0ZD5gIGVsZW1lbnQuXG4gKi9cblxudmFyIFRhYmxlQ2VsbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlQ2VsbChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGFsaWduID0gX3Byb3BzJGFsaWduID09PSB2b2lkIDAgPyAnaW5oZXJpdCcgOiBfcHJvcHMkYWxpZ24sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIHBhZGRpbmdQcm9wID0gcHJvcHMucGFkZGluZyxcbiAgICAgIHNjb3BlUHJvcCA9IHByb3BzLnNjb3BlLFxuICAgICAgc2l6ZVByb3AgPSBwcm9wcy5zaXplLFxuICAgICAgc29ydERpcmVjdGlvbiA9IHByb3BzLnNvcnREaXJlY3Rpb24sXG4gICAgICB2YXJpYW50UHJvcCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxpZ25cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwicGFkZGluZ1wiLCBcInNjb3BlXCIsIFwic2l6ZVwiLCBcInNvcnREaXJlY3Rpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGFibGUgPSBSZWFjdC51c2VDb250ZXh0KFRhYmxlQ29udGV4dCk7XG4gIHZhciB0YWJsZWx2bDIgPSBSZWFjdC51c2VDb250ZXh0KFRhYmxlbHZsMkNvbnRleHQpO1xuICB2YXIgaXNIZWFkQ2VsbCA9IHRhYmxlbHZsMiAmJiB0YWJsZWx2bDIudmFyaWFudCA9PT0gJ2hlYWQnO1xuICB2YXIgcm9sZTtcbiAgdmFyIENvbXBvbmVudDtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHJvbGUgPSBpc0hlYWRDZWxsID8gJ2NvbHVtbmhlYWRlcicgOiAnY2VsbCc7XG4gIH0gZWxzZSB7XG4gICAgQ29tcG9uZW50ID0gaXNIZWFkQ2VsbCA/ICd0aCcgOiAndGQnO1xuICB9XG5cbiAgdmFyIHNjb3BlID0gc2NvcGVQcm9wO1xuXG4gIGlmICghc2NvcGUgJiYgaXNIZWFkQ2VsbCkge1xuICAgIHNjb3BlID0gJ2NvbCc7XG4gIH1cblxuICB2YXIgcGFkZGluZyA9IHBhZGRpbmdQcm9wIHx8ICh0YWJsZSAmJiB0YWJsZS5wYWRkaW5nID8gdGFibGUucGFkZGluZyA6ICdkZWZhdWx0Jyk7XG4gIHZhciBzaXplID0gc2l6ZVByb3AgfHwgKHRhYmxlICYmIHRhYmxlLnNpemUgPyB0YWJsZS5zaXplIDogJ21lZGl1bScpO1xuICB2YXIgdmFyaWFudCA9IHZhcmlhbnRQcm9wIHx8IHRhYmxlbHZsMiAmJiB0YWJsZWx2bDIudmFyaWFudDtcbiAgdmFyIGFyaWFTb3J0ID0gbnVsbDtcblxuICBpZiAoc29ydERpcmVjdGlvbikge1xuICAgIGFyaWFTb3J0ID0gc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUsIGFsaWduICE9PSAnaW5oZXJpdCcgJiYgY2xhc3Nlc1tcImFsaWduXCIuY29uY2F0KGNhcGl0YWxpemUoYWxpZ24pKV0sIHBhZGRpbmcgIT09ICdkZWZhdWx0JyAmJiBjbGFzc2VzW1wicGFkZGluZ1wiLmNvbmNhdChjYXBpdGFsaXplKHBhZGRpbmcpKV0sIHNpemUgIT09ICdtZWRpdW0nICYmIGNsYXNzZXNbXCJzaXplXCIuY29uY2F0KGNhcGl0YWxpemUoc2l6ZSkpXSwgdmFyaWFudCA9PT0gJ2hlYWQnICYmIHRhYmxlICYmIHRhYmxlLnN0aWNreUhlYWRlciAmJiBjbGFzc2VzLnN0aWNreUhlYWRlciksXG4gICAgXCJhcmlhLXNvcnRcIjogYXJpYVNvcnQsXG4gICAgcm9sZTogcm9sZSxcbiAgICBzY29wZTogc2NvcGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFibGVDZWxsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdGV4dC1hbGlnbiBvbiB0aGUgdGFibGUgY2VsbCBjb250ZW50LlxuICAgKlxuICAgKiBNb25ldGFyeSBvciBnZW5lcmFsbHkgbnVtYmVyIGZpZWxkcyAqKnNob3VsZCBiZSByaWdodCBhbGlnbmVkKiogYXMgdGhhdCBhbGxvd3NcbiAgICogeW91IHRvIGFkZCB0aGVtIHVwIHF1aWNrbHkgaW4geW91ciBoZWFkIHdpdGhvdXQgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IGRlY2ltYWxzLlxuICAgKi9cbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2NlbnRlcicsICdpbmhlcml0JywgJ2p1c3RpZnknLCAnbGVmdCcsICdyaWdodCddKSxcblxuICAvKipcbiAgICogVGhlIHRhYmxlIGNlbGwgY29udGVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBjZWxsLlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgVGFibGUgcGFyZW50IGNvbXBvbmVudCBzZXQgdGhlIHZhbHVlIChgZGVmYXVsdGApLlxuICAgKi9cbiAgcGFkZGluZzogUHJvcFR5cGVzLm9uZU9mKFsnY2hlY2tib3gnLCAnZGVmYXVsdCcsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBTZXQgc2NvcGUgYXR0cmlidXRlLlxuICAgKi9cbiAgc2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIHNpemUgb2YgdGhlIGNlbGwuXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBUYWJsZSBwYXJlbnQgY29tcG9uZW50IHNldCB0aGUgdmFsdWUgKGBtZWRpdW1gKS5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogU2V0IGFyaWEtc29ydCBkaXJlY3Rpb24uXG4gICAqL1xuICBzb3J0RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydhc2MnLCAnZGVzYycsIGZhbHNlXSksXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGNlbGwgdHlwZS5cbiAgICogQnkgZGVmYXVsdCwgdGhlIFRhYmxlSGVhZCwgVGFibGVCb2R5IG9yIFRhYmxlRm9vdGVyIHBhcmVudCBjb21wb25lbnQgc2V0IHRoZSB2YWx1ZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2JvZHknLCAnZm9vdGVyJywgJ2hlYWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGVDZWxsJ1xufSkoVGFibGVDZWxsKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgb3ZlcmZsb3dYOiAnYXV0bydcbiAgfVxufTtcbnZhciBUYWJsZUNvbnRhaW5lciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYmxlQ29udGFpbmVyKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdGFibGUgaXRzZWxmLCBub3JtYWxseSBgPFRhYmxlIC8+YFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJsZUNvbnRhaW5lcidcbn0pKFRhYmxlQ29udGFpbmVyKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVGFibGVsdmwyQ29udGV4dCBmcm9tICcuLi9UYWJsZS9UYWJsZWx2bDJDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ3RhYmxlLWhlYWRlci1ncm91cCdcbiAgfVxufTtcbnZhciB0YWJsZWx2bDIgPSB7XG4gIHZhcmlhbnQ6ICdoZWFkJ1xufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50ID0gJ3RoZWFkJztcbnZhciBUYWJsZUhlYWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJsZUhlYWQocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gZGVmYXVsdENvbXBvbmVudCA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlbHZsMkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdGFibGVsdmwyXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogQ29tcG9uZW50ID09PSBkZWZhdWx0Q29tcG9uZW50ID8gbnVsbCA6ICdyb3dncm91cCdcbiAgfSwgb3RoZXIpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYmxlSGVhZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LCBub3JtYWxseSBgVGFibGVSb3dgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJsZUhlYWQnXG59KShUYWJsZUhlYWQpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUYWJsZWx2bDJDb250ZXh0IGZyb20gJy4uL1RhYmxlL1RhYmxlbHZsMkNvbnRleHQnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZGlzcGxheTogJ3RhYmxlLXJvdycsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgJyYkaG92ZXI6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJcbiAgICAgIH0sXG4gICAgICAnJiRzZWxlY3RlZCwgJiRzZWxlY3RlZDpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkT3BhY2l0eSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2VsZWN0ZWQ9e3RydWV9YC4gKi9cbiAgICBzZWxlY3RlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBob3Zlcj17dHJ1ZX1gLiAqL1xuICAgIGhvdmVyOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGFibGUgdmFyaWFudD1cImhlYWRcIi4gKi9cbiAgICBoZWFkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGFibGUgdmFyaWFudD1cImZvb3RlclwiLiAqL1xuICAgIGZvb3Rlcjoge31cbiAgfTtcbn07XG52YXIgZGVmYXVsdENvbXBvbmVudCA9ICd0cic7XG4vKipcbiAqIFdpbGwgYXV0b21hdGljYWxseSBzZXQgZHluYW1pYyByb3cgaGVpZ2h0XG4gKiBiYXNlZCBvbiB0aGUgbWF0ZXJpYWwgdGFibGUgZWxlbWVudCBwYXJlbnQgKGhlYWQsIGJvZHksIGV0YykuXG4gKi9cblxudmFyIFRhYmxlUm93ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFibGVSb3cocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gZGVmYXVsdENvbXBvbmVudCA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkaG92ZXIgPSBwcm9wcy5ob3ZlcixcbiAgICAgIGhvdmVyID0gX3Byb3BzJGhvdmVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRob3ZlcixcbiAgICAgIF9wcm9wcyRzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkLFxuICAgICAgc2VsZWN0ZWQgPSBfcHJvcHMkc2VsZWN0ZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHNlbGVjdGVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJob3ZlclwiLCBcInNlbGVjdGVkXCJdKTtcblxuICB2YXIgdGFibGVsdmwyID0gUmVhY3QudXNlQ29udGV4dChUYWJsZWx2bDJDb250ZXh0KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdGFibGVsdmwyICYmIHtcbiAgICAgICdoZWFkJzogY2xhc3Nlcy5oZWFkLFxuICAgICAgJ2Zvb3Rlcic6IGNsYXNzZXMuZm9vdGVyXG4gICAgfVt0YWJsZWx2bDIudmFyaWFudF0sIGhvdmVyICYmIGNsYXNzZXMuaG92ZXIsIHNlbGVjdGVkICYmIGNsYXNzZXMuc2VsZWN0ZWQpLFxuICAgIHJvbGU6IENvbXBvbmVudCA9PT0gZGVmYXVsdENvbXBvbmVudCA/IG51bGwgOiAncm93J1xuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgYmUgdmFsaWQgPHRyPiBjaGlsZHJlbiBzdWNoIGFzIGBUYWJsZUNlbGxgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGFibGUgcm93IHdpbGwgc2hhZGUgb24gaG92ZXIuXG4gICAqL1xuICBob3ZlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRhYmxlIHJvdyB3aWxsIGhhdmUgdGhlIHNlbGVjdGVkIHNoYWRpbmcuXG4gICAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGFibGVSb3cnXG59KShUYWJsZVJvdyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICB0YWJsZToge1xuICAgICAgICBtaW5XaWR0aDogNjUwLFxuICAgIH0sXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCBkZXNjcmlwdGlvbiwgc3RhdHVzKSB7XG4gICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIHN0YXR1cyB9O1xufVxuXG5jb25zdCByb3dzID0gW1xuICAgIGNyZWF0ZURhdGEoJ0NvbW1hbmQnLCAnRGVzY3JpcHRpb24nLCB0cnVlKVxuXTtcblxuZnVuY3Rpb24gQmFzaWNUYWJsZSgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Db21tYW5kczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlN0YXR1czwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmRlc2NyaXB0aW9ufTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuc3RhdHVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICk7XG59XG5cblxuZnVuY3Rpb24gY29tbWFuZHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDb21tYW5kVGFibGUvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzXG4iXSwic291cmNlUm9vdCI6IiJ9