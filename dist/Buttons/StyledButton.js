"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledButton = (0, _styledComponents.default)(_antd.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: auto;\n  padding: 12px 25px;\n  font: ", ";\n  background-color: #ffffff;\n  border: 1px solid #c3d2de;\n  color: #00264a;\n  text-shadow: none;\n  box-shadow: none;\n\n  :hover {\n    background-color: #dae5ed;\n    border: 1px solid #dae5ed;\n    color: #00264a;\n  }\n\n  :focus {\n    background-color: #ffffff;\n    border: 1px solid #80c4ff;\n    color: #00264a;\n  }\n\n  :disabled {\n    background-color: #DAE5ED;\n    color: #95ADBF;\n  }\n  \n  ", "\n\n    ", "\n\n"])), props => props.theme.font.btnFont, _ref => {
  let {
    type
  } = _ref;
  return type === "primary" && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background-color: #0075e3;\n      border: 1px solid #0075e3;\n      color: #ffffff;\n\n      :hover {\n        background-color: #0d8aff;\n        color: #ffffff;\n      }\n\n      :focus {\n        background-color: #0075e3;\n        border: 1px solid #80c4ff;\n        color: #ffffff;\n      }\n    "])));
}, _ref2 => {
  let {
    size
  } = _ref2;
  return size === "small" && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        font: normal normal normal 12px/14px Roboto;\n        padding: 5px 15px;\n\n        :focus {\n          padding: 5px 15px;\n          border: 1px solid #80c4ff;\n        }\n      "])));
});
var _default = StyledButton;
exports.default = _default;