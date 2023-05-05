"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Getattractiondata = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Url = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';
var options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
  params: {
    longitude: '109.19553',
    latitude: '12.235588'
  },
  headers: {
    'X-RapidAPI-Key': '6e2144aff4msh222cad2f859ddcep14ddf0jsn7b8037eebccf',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

var Getattractiondata = function Getattractiondata() {
  var _ref, data;

  return regeneratorRuntime.async(function Getattractiondata$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(Url, options));

        case 3:
          _ref = _context.sent;
          data = _ref.data.data;
          return _context.abrupt("return", data);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.Getattractiondata = Getattractiondata;