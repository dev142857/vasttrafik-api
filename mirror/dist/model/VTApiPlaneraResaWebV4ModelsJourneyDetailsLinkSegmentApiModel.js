"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver"));
var _VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel</code>.
   * Represents a segment of a departure access link, arrival access link or destination link.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('maneuver')) {
          obj['maneuver'] = _VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver["default"].constructFromObject(data['maneuver']);
        }
        if (data.hasOwnProperty('orientation')) {
          obj['orientation'] = _VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation["default"].constructFromObject(data['orientation']);
        }
        if (data.hasOwnProperty('maneuverDescription')) {
          obj['maneuverDescription'] = _ApiClient["default"].convertToType(data['maneuverDescription'], 'String');
        }
        if (data.hasOwnProperty('distanceInMeters')) {
          obj['distanceInMeters'] = _ApiClient["default"].convertToType(data['distanceInMeters'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['maneuverDescription'] && !(typeof data['maneuverDescription'] === 'string' || data['maneuverDescription'] instanceof String)) {
        throw new Error("Expected the field `maneuverDescription` to be a primitive type in the JSON string but got " + data['maneuverDescription']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel;
}();
/**
 * Segment name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.prototype['name'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver} maneuver
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.prototype['maneuver'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation} orientation
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.prototype['orientation'] = undefined;

/**
 * Description for the maneuver.
 * @member {String} maneuverDescription
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.prototype['maneuverDescription'] = undefined;

/**
 * Distance for this segment in meter.
 * @member {Number} distanceInMeters
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.prototype['distanceInMeters'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel;
exports["default"] = _default;