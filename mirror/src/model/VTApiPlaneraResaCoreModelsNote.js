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
import VTApiPlaneraResaCoreModelsSeverity from './VTApiPlaneraResaCoreModelsSeverity';

/**
 * The VTApiPlaneraResaCoreModelsNote model module.
 * @module model/VTApiPlaneraResaCoreModelsNote
 * @version v4
 */
class VTApiPlaneraResaCoreModelsNote {
    /**
     * Constructs a new <code>VTApiPlaneraResaCoreModelsNote</code>.
     * @alias module:model/VTApiPlaneraResaCoreModelsNote
     */
    constructor() { 
        
        VTApiPlaneraResaCoreModelsNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaCoreModelsNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaCoreModelsNote} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaCoreModelsNote} The populated <code>VTApiPlaneraResaCoreModelsNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaCoreModelsNote();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = VTApiPlaneraResaCoreModelsSeverity.constructFromObject(data['severity']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaCoreModelsNote</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaCoreModelsNote</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
VTApiPlaneraResaCoreModelsNote.prototype['type'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsSeverity} severity
 */
VTApiPlaneraResaCoreModelsNote.prototype['severity'] = undefined;

/**
 * @member {String} text
 */
VTApiPlaneraResaCoreModelsNote.prototype['text'] = undefined;






export default VTApiPlaneraResaCoreModelsNote;
