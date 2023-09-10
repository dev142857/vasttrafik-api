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
import VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel from './VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel
     * @param gid {String} The 16-digit Västtrafik gid of the stop point.
     * @param name {String} The stop point name.
     */
    constructor(gid, name) { 
        
        VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.initialize(this, gid, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gid, name) { 
        obj['gid'] = gid;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('stopArea')) {
                obj['stopArea'] = VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel.constructFromObject(data['stopArea']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }
        // validate the optional field `stopArea`
        if (data['stopArea']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel.validateJSON(data['stopArea']);
        }

        return true;
    }


}

VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.RequiredProperties = ["gid", "name"];

/**
 * The 16-digit Västtrafik gid of the stop point.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.prototype['gid'] = undefined;

/**
 * The stop point name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.prototype['name'] = undefined;

/**
 * The platform of the stop point.
 * @member {String} platform
 */
VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.prototype['platform'] = undefined;

/**
 * The latitude coordinate of the stop point.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.prototype['latitude'] = undefined;

/**
 * The logitude coordinate of the stop point.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.prototype['longitude'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel} stopArea
 */
VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.prototype['stopArea'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel;

