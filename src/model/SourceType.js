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
* The SourceType model module.
* @module model/SourceType
* @version 0.0.1
*/
export default class SourceType {
    /**
    * Constructs a new <code>SourceType</code>.
    * @alias module:model/SourceType
    * @class
    * @param name {String} 
    * @param productName {String} 
    * @param vendor {String} 
    */

    constructor(name, productName, vendor) {
        

        
        

        this['name'] = name;this['product_name'] = productName;this['vendor'] = vendor;

        
    }

    /**
    * Constructs a <code>SourceType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SourceType} obj Optional instance to populate.
    * @return {module:model/SourceType} The populated <code>SourceType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceType();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} product_name
    */
    product_name = undefined;
    /**
    * @member {String} vendor
    */
    vendor = undefined;
    /**
    * @member {Object} schema
    */
    schema = undefined;








}

