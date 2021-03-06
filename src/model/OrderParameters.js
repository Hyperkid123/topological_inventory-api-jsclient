/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The OrderParameters model module.
* @module model/OrderParameters
* @version 0.0.1
*/
export default class OrderParameters {
    /**
    * Constructs a new <code>OrderParameters</code>.
    * @alias module:model/OrderParameters
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OrderParameters</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderParameters} obj Optional instance to populate.
    * @return {module:model/OrderParameters} The populated <code>OrderParameters</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderParameters();

            
            
            

            if (data.hasOwnProperty('service_parameters')) {
                obj['service_parameters'] = ApiClient.convertToType(data['service_parameters'], Object);
            }
            if (data.hasOwnProperty('provider_control_parameters')) {
                obj['provider_control_parameters'] = ApiClient.convertToType(data['provider_control_parameters'], Object);
            }
        }
        return obj;
    }

    /**
    * JSON object with provisioning parameters
    * @member {Object} service_parameters
    */
    service_parameters = undefined;
    /**
    * The provider specific parameters needed to provision this service. This might include namespaces, special keys
    * @member {Object} provider_control_parameters
    */
    provider_control_parameters = undefined;








}


