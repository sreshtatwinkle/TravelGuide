"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Responsive_page = exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  @media (max-width: 950px) {\n      width: 230%;\n      \n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: '30px'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    loading: {
      height: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      padding: '25px'
    },
    marginBottom: {
      marginBottom: '30px'
    },
    list: {
      height: '75vh',
      overflow: 'auto'
    }
  };
});

exports["default"] = _default;

var Responsive_page = _styledComponents["default"].div(_templateObject());

exports.Responsive_page = Responsive_page;