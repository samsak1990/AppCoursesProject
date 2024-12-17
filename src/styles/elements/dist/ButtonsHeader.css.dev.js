"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background-color: #e0dced;\n        border: 1px solid #ba75ff;\n        border-radius: 5px;\n        color:#ba75ff;\n        width: 112px;\n        height: 36px;\n        cursor: pointer;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        background-color: #e4e4e4;\n        border: 1px solid rgb(77, 76, 76);\n        border-radius: 5px;\n        color:rgb(77, 76, 76);\n        width: 112px;\n        height: 36px;\n        cursor: pointer;\n        margin-right: 26px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        width: 250px;\n        height: 36px;\n        font-size: 12px;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Buttons = {
  ButtonsContainer: _styledComponents["default"].div(_templateObject()),
  ButtonGrey: _styledComponents["default"].button(_templateObject2()),
  ButtonViolet: _styledComponents["default"].button(_templateObject3())
};
var _default = Buttons;
exports["default"] = _default;