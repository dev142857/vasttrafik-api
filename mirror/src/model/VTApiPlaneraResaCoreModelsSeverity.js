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
* Enum class VTApiPlaneraResaCoreModelsSeverity.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaCoreModelsSeverity {
    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "low"
         * @const
         */
        "low" = "low";

    
        /**
         * value: "normal"
         * @const
         */
        "normal" = "normal";

    
        /**
         * value: "high"
         * @const
         */
        "high" = "high";

    

    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsSeverity</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsSeverity} The enum <code>VTApiPlaneraResaCoreModelsSeverity</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
