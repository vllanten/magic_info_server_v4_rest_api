/**
 * MagicInfo Server V4.1 REST API
 * MagicInfo Server V4.1 REST API
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
    root.MagicInfoServerV41RestApi.DeviceDisplayCustomLogoResource = factory(root.MagicInfoServerV41RestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceDisplayCustomLogoResource model module.
   * @module model/DeviceDisplayCustomLogoResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceDisplayCustomLogoResource</code>.
   * @alias module:model/DeviceDisplayCustomLogoResource
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DeviceDisplayCustomLogoResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDisplayCustomLogoResource} obj Optional instance to populate.
   * @return {module:model/DeviceDisplayCustomLogoResource} The populated <code>DeviceDisplayCustomLogoResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('changed')) {
        obj['changed'] = ApiClient.convertToType(data['changed'], 'Boolean');
      }
      if (data.hasOwnProperty('displayTime')) {
        obj['displayTime'] = ApiClient.convertToType(data['displayTime'], 'String');
      }
      if (data.hasOwnProperty('fileType')) {
        obj['fileType'] = ApiClient.convertToType(data['fileType'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} changed
   */
  exports.prototype['changed'] = undefined;
  /**
   * @member {String} displayTime
   */
  exports.prototype['displayTime'] = undefined;
  /**
   * @member {String} fileType
   */
  exports.prototype['fileType'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


