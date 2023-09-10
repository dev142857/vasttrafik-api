"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * Planera Resa
                                                                                                                                                                                                                                                                                                                                                                                               * Sök och planera resor med Västtrafik
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: v4
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* Enum class VTApiPlaneraResaWebV4ModelsOccupancyInformationSource.
* @enum {}
* @readonly
*/
var VTApiPlaneraResaWebV4ModelsOccupancyInformationSource = /*#__PURE__*/function () {
  function VTApiPlaneraResaWebV4ModelsOccupancyInformationSource() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsOccupancyInformationSource);
    /**
     * value: "prediction"
     * @const
     */
    _defineProperty(this, "prediction", "prediction");
    /**
     * value: "realtime"
     * @const
     */
    _defineProperty(this, "realtime", "realtime");
  }
  _createClass(VTApiPlaneraResaWebV4ModelsOccupancyInformationSource, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationSource</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationSource} The enum <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationSource</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsOccupancyInformationSource;
}();
exports["default"] = VTApiPlaneraResaWebV4ModelsOccupancyInformationSource;