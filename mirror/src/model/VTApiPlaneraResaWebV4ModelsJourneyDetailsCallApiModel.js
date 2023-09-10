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
import VTApiPlaneraResaCoreModelsNote from './VTApiPlaneraResaCoreModelsNote';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel</code>.
     * Information about a call on the trip leg.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel
     * @param stopPoint {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel} 
     * @param plannedTime {String} The planned time of the call in RFC 3339 format.
     */
    constructor(stopPoint, plannedTime) { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.initialize(this, stopPoint, plannedTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, stopPoint, plannedTime) { 
        obj['stopPoint'] = stopPoint;
        obj['plannedTime'] = plannedTime;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel();

            if (data.hasOwnProperty('stopPoint')) {
                obj['stopPoint'] = VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.constructFromObject(data['stopPoint']);
            }
            if (data.hasOwnProperty('plannedTime')) {
                obj['plannedTime'] = ApiClient.convertToType(data['plannedTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedTime')) {
                obj['estimatedTime'] = ApiClient.convertToType(data['estimatedTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedOtherwisePlannedTime')) {
                obj['estimatedOtherwisePlannedTime'] = ApiClient.convertToType(data['estimatedOtherwisePlannedTime'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], [VTApiPlaneraResaCoreModelsNote]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `stopPoint`
        if (data['stopPoint']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.validateJSON(data['stopPoint']);
        }
        // ensure the json data is a string
        if (data['plannedTime'] && !(typeof data['plannedTime'] === 'string' || data['plannedTime'] instanceof String)) {
            throw new Error("Expected the field `plannedTime` to be a primitive type in the JSON string but got " + data['plannedTime']);
        }
        // ensure the json data is a string
        if (data['estimatedTime'] && !(typeof data['estimatedTime'] === 'string' || data['estimatedTime'] instanceof String)) {
            throw new Error("Expected the field `estimatedTime` to be a primitive type in the JSON string but got " + data['estimatedTime']);
        }
        // ensure the json data is a string
        if (data['estimatedOtherwisePlannedTime'] && !(typeof data['estimatedOtherwisePlannedTime'] === 'string' || data['estimatedOtherwisePlannedTime'] instanceof String)) {
            throw new Error("Expected the field `estimatedOtherwisePlannedTime` to be a primitive type in the JSON string but got " + data['estimatedOtherwisePlannedTime']);
        }
        if (data['notes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['notes'])) {
                throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
            }
            // validate the optional field `notes` (array)
            for (const item of data['notes']) {
                VTApiPlaneraResaCoreModelsNote.validateJSON(item);
            };
        }

        return true;
    }


}

VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.RequiredProperties = ["stopPoint", "plannedTime"];

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel} stopPoint
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.prototype['stopPoint'] = undefined;

/**
 * The planned time of the call in RFC 3339 format.
 * @member {String} plannedTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.prototype['plannedTime'] = undefined;

/**
 * The estimated time of the call in RFC 3339 format.
 * @member {String} estimatedTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.prototype['estimatedTime'] = undefined;

/**
 * The best known time of the call in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime.
 * @member {String} estimatedOtherwisePlannedTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.prototype['estimatedOtherwisePlannedTime'] = undefined;

/**
 * An ordered list (most important first) of notes related to the call.
 * @member {Array.<module:model/VTApiPlaneraResaCoreModelsNote>} notes
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.prototype['notes'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel;

