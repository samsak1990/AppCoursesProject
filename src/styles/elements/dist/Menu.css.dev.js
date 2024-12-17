"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        margin-right: 25px;\n        cursor: pointer;\n        :last-child{\n            margin-right: 0;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        display: flex;\n        flex-direction: row;\n        padding: 0;\n        font-size: 10px;\n        align-items: center;\n        color: #6b7280;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Menu = {
  MenuContainer: _styledComponents["default"].menu(_templateObject()),
  Links: _styledComponents["default"].li(_templateObject2())
};
var _default = Menu;
exports["default"] = _default;