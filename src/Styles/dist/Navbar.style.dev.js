"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarExtTrack = exports.NavbarLinks = exports.NavLinks = exports.NavbarIntTrack = exports.RightnavTrack = exports.LeftnavTrack = exports.NavbarTrack = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ncolor: white;\nfont-size: large;\nfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\ntext-decoration: none;\nmargin: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nheight: 80px;\ndisplay: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex:30%;\n    display:flex;\n    justify-content: flex-end;\n    padding-right: 50%;\n    \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 70%;\n    display: flex;\n    align-items: center;\n    padding-left:5%;\n   ;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 80px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarTrack = _styledComponents["default"].nav(_templateObject());

exports.NavbarTrack = NavbarTrack;

var LeftnavTrack = _styledComponents["default"].div(_templateObject2());

exports.LeftnavTrack = LeftnavTrack;

var RightnavTrack = _styledComponents["default"].div(_templateObject3());

exports.RightnavTrack = RightnavTrack;

var NavbarIntTrack = _styledComponents["default"].div(_templateObject4());

exports.NavbarIntTrack = NavbarIntTrack;

var NavLinks = _styledComponents["default"].div(_templateObject5());

exports.NavLinks = NavLinks;
var NavbarLinks = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject6());
exports.NavbarLinks = NavbarLinks;

var NavbarExtTrack = _styledComponents["default"].div(_templateObject7());

exports.NavbarExtTrack = NavbarExtTrack;