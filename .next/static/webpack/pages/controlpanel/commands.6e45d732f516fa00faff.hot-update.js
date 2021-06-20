self["webpackHotUpdate_N_E"]("pages/controlpanel/commands",{

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

var rows = [createData('Command', 'Description', true), createData('Command', 'Description', true), createData('Command', 'Description', true), createData('Command', 'Description', true)];

function commands() {
  _s();

  var _this = this;

  var classes = useStyles();
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
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              style: {
                color: '#fff'
              },
              children: row.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              style: {
                color: '#fff'
              },
              children: row.status ? 'Online' : 'Offline'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this);
        })
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

_s(commands, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

/* harmony default export */ __webpack_exports__["default"] = (commands);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJvbHBhbmVsL2NvbW1hbmRzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsInJvd3MiLCJjb21tYW5kcyIsImNsYXNzZXMiLCJQYXBlciIsImJhY2tncm91bmQiLCJjb2xvciIsIm1hcCIsInJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsT0FBSyxFQUFFO0FBQ0hDLFlBQVEsRUFBRTtBQURQO0FBRGtCLENBQUQsQ0FBNUI7O0FBTUEsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLFdBQTFCLEVBQXVDQyxNQUF2QyxFQUErQztBQUMzQyxTQUFPO0FBQUVGLFFBQUksRUFBSkEsSUFBRjtBQUFRQyxlQUFXLEVBQVhBLFdBQVI7QUFBcUJDLFVBQU0sRUFBTkE7QUFBckIsR0FBUDtBQUNIOztBQUVELElBQU1DLElBQUksR0FBRyxDQUNUSixVQUFVLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsSUFBM0IsQ0FERCxFQUVUQSxVQUFVLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsSUFBM0IsQ0FGRCxFQUdUQSxVQUFVLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsSUFBM0IsQ0FIRCxFQUlUQSxVQUFVLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsSUFBM0IsQ0FKRCxDQUFiOztBQU9BLFNBQVNLLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRUEsc0JBQ0ksOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFVyw0REFBM0I7QUFBa0MsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUF6QztBQUFBLDJCQUNJLDhEQUFDLDREQUFEO0FBQU8sZUFBUyxFQUFFRixPQUFPLENBQUNSLEtBQTFCO0FBQWlDLG9CQUFXLGNBQTVDO0FBQUEsOEJBQ0ksOERBQUMsZ0VBQUQ7QUFBQSwrQkFDSSw4REFBQywrREFBRDtBQUFBLGtDQUNJLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBRTtBQUFFVyxtQkFBSyxFQUFFO0FBQVQsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSw4REFBQyxnRUFBRDtBQUFXLGlCQUFLLEVBQUMsT0FBakI7QUFBeUIsaUJBQUssRUFBRTtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSSw4REFBQyxnRUFBRDtBQUFXLGlCQUFLLEVBQUMsT0FBakI7QUFBeUIsaUJBQUssRUFBRTtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUksOERBQUMsZ0VBQUQ7QUFBQSxrQkFDS0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLDhCQUNOLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0ksOERBQUMsZ0VBQUQ7QUFBVyx1QkFBUyxFQUFDLElBQXJCO0FBQTBCLG1CQUFLLEVBQUMsS0FBaEM7QUFBc0MsbUJBQUssRUFBRTtBQUFFRixxQkFBSyxFQUFFO0FBQVQsZUFBN0M7QUFBQSx3QkFDS0UsR0FBRyxDQUFDVjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBeUIsbUJBQUssRUFBRTtBQUFFUSxxQkFBSyxFQUFFO0FBQVQsZUFBaEM7QUFBQSx3QkFBb0RFLEdBQUcsQ0FBQ1Q7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUF5QixtQkFBSyxFQUFFO0FBQUVPLHFCQUFLLEVBQUU7QUFBVCxlQUFoQztBQUFBLHdCQUFvREUsR0FBRyxDQUFDUixNQUFKLEdBQWEsUUFBYixHQUF3QjtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUEsYUFBZVEsR0FBRyxDQUFDVixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURNO0FBQUEsU0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0dBM0JRSSxRO1VBQ1dULFM7OztBQTRCcEIsK0RBQWVTLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udHJvbHBhbmVsL2NvbW1hbmRzLjZlNDVkNzMyZjUxNmZhMDBmYWZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICB0YWJsZToge1xuICAgICAgICBtaW5XaWR0aDogNjUwLFxuICAgIH0sXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCBkZXNjcmlwdGlvbiwgc3RhdHVzKSB7XG4gICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIHN0YXR1cyB9O1xufVxuXG5jb25zdCByb3dzID0gW1xuICAgIGNyZWF0ZURhdGEoJ0NvbW1hbmQnLCAnRGVzY3JpcHRpb24nLCB0cnVlKSxcbiAgICBjcmVhdGVEYXRhKCdDb21tYW5kJywgJ0Rlc2NyaXB0aW9uJywgdHJ1ZSksXG4gICAgY3JlYXRlRGF0YSgnQ29tbWFuZCcsICdEZXNjcmlwdGlvbicsIHRydWUpLFxuICAgIGNyZWF0ZURhdGEoJ0NvbW1hbmQnLCAnRGVzY3JpcHRpb24nLCB0cnVlKSxcbl07XG5cbmZ1bmN0aW9uIGNvbW1hbmRzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzFGMUIyNCcgfX0+XG4gICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PkNvbW1hbmRzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PkRlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PlN0YXR1czwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+e3Jvdy5kZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19Pntyb3cuc3RhdHVzID8gJ09ubGluZScgOiAnT2ZmbGluZSd9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZHNcbiJdLCJzb3VyY2VSb290IjoiIn0=