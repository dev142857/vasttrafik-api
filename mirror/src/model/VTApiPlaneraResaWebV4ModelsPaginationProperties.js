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

/**
 * The VTApiPlaneraResaWebV4ModelsPaginationProperties model module.
 * @module model/VTApiPlaneraResaWebV4ModelsPaginationProperties
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsPaginationProperties {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsPaginationProperties</code>.
     * Pagination information.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsPaginationProperties
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsPaginationProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsPaginationProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsPaginationProperties} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsPaginationProperties} The populated <code>VTApiPlaneraResaWebV4ModelsPaginationProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsPaginationProperties();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsPaginationProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsPaginationProperties</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The requested number of results.
 * @member {Number} limit
 */
VTApiPlaneraResaWebV4ModelsPaginationProperties.prototype['limit'] = undefined;

/**
 * The requested offset in the results array.
 * @member {Number} offset
 */
VTApiPlaneraResaWebV4ModelsPaginationProperties.prototype['offset'] = undefined;

/**
 * The actual number of returned results.
 * @member {Number} size
 */
VTApiPlaneraResaWebV4ModelsPaginationProperties.prototype['size'] = undefined;






export default VTApiPlaneraResaWebV4ModelsPaginationProperties;
