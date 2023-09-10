/**
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

import ApiClient from '../ApiClient';
import VTApiPlaneraResaWebV4ModelsCoordinateApiModel from './VTApiPlaneraResaWebV4ModelsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel';
import VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel from './VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code>.
     * Detailed information about a Public Transport trip leg.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel();

            if (data.hasOwnProperty('serviceJourneys')) {
                obj['serviceJourneys'] = ApiClient.convertToType(data['serviceJourneys'], [VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel]);
            }
            if (data.hasOwnProperty('callsOnTripLeg')) {
                obj['callsOnTripLeg'] = ApiClient.convertToType(data['callsOnTripLeg'], [VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel]);
            }
            if (data.hasOwnProperty('tripLegCoordinates')) {
                obj['tripLegCoordinates'] = ApiClient.convertToType(data['tripLegCoordinates'], [VTApiPlaneraResaWebV4ModelsCoordinateApiModel]);
            }
            if (data.hasOwnProperty('tariffZones')) {
                obj['tariffZones'] = ApiClient.convertToType(data['tariffZones'], [VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel]);
            }
            if (data.hasOwnProperty('isCancelled')) {
                obj['isCancelled'] = ApiClient.convertToType(data['isCancelled'], 'Boolean');
            }
            if (data.hasOwnProperty('isPartCancelled')) {
                obj['isPartCancelled'] = ApiClient.convertToType(data['isPartCancelled'], 'Boolean');
            }
            if (data.hasOwnProperty('occupancy')) {
                obj['occupancy'] = VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.constructFromObject(data['occupancy']);
            }
            if (data.hasOwnProperty('journeyLegIndex')) {
                obj['journeyLegIndex'] = ApiClient.convertToType(data['journeyLegIndex'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code>.
     */
    static validateJSON(data) {
        if (data['serviceJourneys']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serviceJourneys'])) {
                throw new Error("Expected the field `serviceJourneys` to be an array in the JSON data but got " + data['serviceJourneys']);
            }
            // validate the optional field `serviceJourneys` (array)
            for (const item of data['serviceJourneys']) {
                VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.validateJSON(item);
            };
        }
        if (data['callsOnTripLeg']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['callsOnTripLeg'])) {
                throw new Error("Expected the field `callsOnTripLeg` to be an array in the JSON data but got " + data['callsOnTripLeg']);
            }
            // validate the optional field `callsOnTripLeg` (array)
            for (const item of data['callsOnTripLeg']) {
                VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.validateJSON(item);
            };
        }
        if (data['tripLegCoordinates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tripLegCoordinates'])) {
                throw new Error("Expected the field `tripLegCoordinates` to be an array in the JSON data but got " + data['tripLegCoordinates']);
            }
            // validate the optional field `tripLegCoordinates` (array)
            for (const item of data['tripLegCoordinates']) {
                VTApiPlaneraResaWebV4ModelsCoordinateApiModel.validateJSON(item);
            };
        }
        if (data['tariffZones']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tariffZones'])) {
                throw new Error("Expected the field `tariffZones` to be an array in the JSON data but got " + data['tariffZones']);
            }
            // validate the optional field `tariffZones` (array)
            for (const item of data['tariffZones']) {
                VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel.validateJSON(item);
            };
        }
        // validate the optional field `occupancy`
        if (data['occupancy']) { // data not null
          VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.validateJSON(data['occupancy']);
        }

        return true;
    }


}



/**
 * The service journey for the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel>} serviceJourneys
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['serviceJourneys'] = undefined;

/**
 * The calls on the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel>} callsOnTripLeg
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['callsOnTripLeg'] = undefined;

/**
 * The coordinates for the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel>} tripLegCoordinates
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['tripLegCoordinates'] = undefined;

/**
 * The tariff zones that the trip leg traverses.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel>} tariffZones
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['tariffZones'] = undefined;

/**
 * Flag indicating if the trip leg is cancelled.
 * @member {Boolean} isCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['isCancelled'] = undefined;

/**
 * Flag indicating if the trip leg is partially cancelled.
 * @member {Boolean} isPartCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['isPartCancelled'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['occupancy'] = undefined;

/**
 * Index of Leg in Journey
 * @member {Number} journeyLegIndex
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['journeyLegIndex'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel;
