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
* Enum class VTApiPlaneraResaCoreModelsTimeValidityUnit.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaCoreModelsTimeValidityUnit {
    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "minutes"
         * @const
         */
        "minutes" = "minutes";

    
        /**
         * value: "hours"
         * @const
         */
        "hours" = "hours";

    
        /**
         * value: "days"
         * @const
         */
        "days" = "days";

    
        /**
         * value: "year"
         * @const
         */
        "year" = "year";

    
        /**
         * value: "semester"
         * @const
         */
        "semester" = "semester";

    
        /**
         * value: "schoolyear"
         * @const
         */
        "schoolyear" = "schoolyear";

    
        /**
         * value: "unlimited"
         * @const
         */
        "unlimited" = "unlimited";

    

    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsTimeValidityUnit</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsTimeValidityUnit} The enum <code>VTApiPlaneraResaCoreModelsTimeValidityUnit</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

