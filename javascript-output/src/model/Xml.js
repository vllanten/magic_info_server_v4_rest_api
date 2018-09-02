/**
 * MagicInfo Server V4.1 - REST API
 * MagicInfo Server V4.1 - REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV41RestApi) {
      root.MagicInfoServerV41RestApi = {};
    }
    root.MagicInfoServerV41RestApi.Xml = factory(root.MagicInfoServerV41RestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Xml model module.
   * @module model/Xml
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Xml</code>.
   * @alias module:model/Xml
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Xml</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Xml} obj Optional instance to populate.
   * @return {module:model/Xml} The populated <code>Xml</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attribute')) {
        obj['attribute'] = ApiClient.convertToType(data['attribute'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('wrapped')) {
        obj['wrapped'] = ApiClient.convertToType(data['wrapped'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} attribute
   */
  exports.prototype['attribute'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} namespace
   */
  exports.prototype['namespace'] = undefined;
  /**
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * @member {Boolean} wrapped
   */
  exports.prototype['wrapped'] = undefined;



  return exports;
}));


