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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code>.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('offerSpecification')) {
          obj['offerSpecification'] = _ApiClient["default"].convertToType(data['offerSpecification'], 'String');
        }
        if (data.hasOwnProperty('timeOfIssue')) {
          obj['timeOfIssue'] = _ApiClient["default"].convertToType(data['timeOfIssue'], 'String');
        }
        if (data.hasOwnProperty('timeOfActivation')) {
          obj['timeOfActivation'] = _ApiClient["default"].convertToType(data['timeOfActivation'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['offerSpecification'] && !(typeof data['offerSpecification'] === 'string' || data['offerSpecification'] instanceof String)) {
        throw new Error("Expected the field `offerSpecification` to be a primitive type in the JSON string but got " + data['offerSpecification']);
      }
      // ensure the json data is a string
      if (data['timeOfIssue'] && !(typeof data['timeOfIssue'] === 'string' || data['timeOfIssue'] instanceof String)) {
        throw new Error("Expected the field `timeOfIssue` to be a primitive type in the JSON string but got " + data['timeOfIssue']);
      }
      // ensure the json data is a string
      if (data['timeOfActivation'] && !(typeof data['timeOfActivation'] === 'string' || data['timeOfActivation'] instanceof String)) {
        throw new Error("Expected the field `timeOfActivation` to be a primitive type in the JSON string but got " + data['timeOfActivation']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel;
}();
/**
 * An Id for matching this existingTicket with ticketValidityApiModel in response.
 * @member {String} id
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['id'] = undefined;

/**
 * From TicketSuggestionApiModel
 * @member {String} offerSpecification
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['offerSpecification'] = undefined;

/**
 * Must be specified in RFC 3339 format
 * @member {String} timeOfIssue
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['timeOfIssue'] = undefined;

/**
 * Must be specified in RFC 3339 format
 * @member {String} timeOfActivation
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['timeOfActivation'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel;
exports["default"] = _default;