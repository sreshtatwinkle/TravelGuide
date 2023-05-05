"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Homebutton = exports.HomeButtWrapper = exports.Hometext = exports.HomemainHeading = exports.HomeContainer = exports.Homeimg = exports.Homesection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tborder-radius: 4px;\n\tbackground: none;\n\twhite-space: nowrap;\n\tpadding: 10px 20px;\n\tfont-size: 16px;\n\tcolor: #fff;\n\toutline: none;\n\tborder: 2px solid #fff;\n\tcursor: pointer;\n\toverflow: hidden;\n\tposition: relative;\n\t&:before {\n\t\tbackground: #fff;\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\tz-index: -1;\n\t\ttransition: all 0.6s ease;\n\t\twidth: 100%;\n\t\theight: 0%;\n\t\ttransform: translate(-50%, -50%) rotate(45deg);\n\t}\n\t&:hover:before {\n\t\theight: 500%;\n\t}\n\t&:hover {\n\t\tcolor: black;\n\t}\n    color: black;\n\t&:before {\n\t\tbackground: #fff;\n\t\theight: 500%;\n\t}\n\t&:hover:before {\n\t\theight: 0%;\n\t}\n\t&:hover {\n\t\tcolor: white;\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-flow: wrap;\n\tgap: 0.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 35px;\n\tfont-size: clamp(0.9rem, 1.5vw, 1.3rem);\n\tline-height: 24px;\n\ttext-align: center;\n\tletter-spacing: 2px;\n\tcolor: #fff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: clamp(2.3rem, 6vw, 4.5rem);\n\tmargin-bottom: 2rem;\n\tcolor: ", ";\n\twidth: 100%;\n\tletter-spacing: 4px;\n\ttext-align: center;\n\t\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tmax-width: 1300px;\n\tmargin-right: auto;\n\tmargin-left: auto;\n\tpadding: 0 50px;\n\t@media screen and (max-width: 960px) {\n\t\tpadding: 0 30px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    object-fit: cover;\n\twidth: 100%;\n\theight: 200%;\n\tbackground: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));\n\ttop: 0;\n\tposition: absolute;\n\tz-index: -1;  \n\t\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 100vh;\n\tbackground-position: center;\n\tbackground-size: cover;\n\tpadding-top: clamp(70px, 25vh, 220px);\n\tbox-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);\n\toverflow-x: hidden;\n\toverflow-y: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Homesection = _styledComponents["default"].section(_templateObject());

exports.Homesection = Homesection;

var Homeimg = _styledComponents["default"].img(_templateObject2());

exports.Homeimg = Homeimg;

var HomeContainer = _styledComponents["default"].div(_templateObject3());

exports.HomeContainer = HomeContainer;

var HomemainHeading = _styledComponents["default"].h1(_templateObject4(), function (_ref) {
  var inverse = _ref.inverse;
  return inverse ? '$403ae3' : '#fff';
});

exports.HomemainHeading = HomemainHeading;

var Hometext = _styledComponents["default"].p(_templateObject5());

exports.Hometext = Hometext;

var HomeButtWrapper = _styledComponents["default"].div(_templateObject6());

exports.HomeButtWrapper = HomeButtWrapper;

var Homebutton = _styledComponents["default"].button(_templateObject7());

exports.Homebutton = Homebutton;