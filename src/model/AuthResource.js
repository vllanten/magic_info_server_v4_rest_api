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
    root.MagicInfoServerV41RestApi.AuthResource = factory(root.MagicInfoServerV41RestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthResource model module.
   * @module model/AuthResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AuthResource</code>.
   * @alias module:model/AuthResource
   * @class
   * @param username {String} 
   * @param password {String} 
   */
  var exports = function(username, password) {
    var _this = this;

    _this['username'] = username;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>AuthResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthResource} obj Optional instance to populate.
   * @return {module:model/AuthResource} The populated <code>AuthResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


