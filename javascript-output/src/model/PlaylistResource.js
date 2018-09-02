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
    define(['ApiClient', 'model/PlaylistItemResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlaylistItemResource'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV41RestApi) {
      root.MagicInfoServerV41RestApi = {};
    }
    root.MagicInfoServerV41RestApi.PlaylistResource = factory(root.MagicInfoServerV41RestApi.ApiClient, root.MagicInfoServerV41RestApi.PlaylistItemResource);
  }
}(this, function(ApiClient, PlaylistItemResource) {
  'use strict';




  /**
   * The PlaylistResource model module.
   * @module model/PlaylistResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PlaylistResource</code>.
   * @alias module:model/PlaylistResource
   * @class
   * @param contentCount {Number} 
   * @param creatorId {String} 
   * @param deviceType {String} 
   * @param deviceTypeVersion {String} 
   * @param groupId {String} 
   * @param groupName {String} 
   * @param lastModifiedDate {String} 
   * @param metaData {String} 
   * @param playTime {Number} 
   * @param playlistName {String} 
   * @param playlistType {String} 
   * @param shareFlag {Number} 
   * @param shuffleFlag {String} 
   * @param versionId {Number} 
   */
  var exports = function(contentCount, creatorId, deviceType, deviceTypeVersion, groupId, groupName, lastModifiedDate, metaData, playTime, playlistName, playlistType, shareFlag, shuffleFlag, versionId) {
    var _this = this;


    _this['contentCount'] = contentCount;

    _this['creatorId'] = creatorId;
    _this['deviceType'] = deviceType;
    _this['deviceTypeVersion'] = deviceTypeVersion;
    _this['groupId'] = groupId;
    _this['groupName'] = groupName;
    _this['lastModifiedDate'] = lastModifiedDate;
    _this['metaData'] = metaData;
    _this['playTime'] = playTime;

    _this['playlistName'] = playlistName;
    _this['playlistType'] = playlistType;
    _this['shareFlag'] = shareFlag;
    _this['shuffleFlag'] = shuffleFlag;



    _this['versionId'] = versionId;
  };

  /**
   * Constructs a <code>PlaylistResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlaylistResource} obj Optional instance to populate.
   * @return {module:model/PlaylistResource} The populated <code>PlaylistResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('categoryList')) {
        obj['categoryList'] = ApiClient.convertToType(data['categoryList'], [Object]);
      }
      if (data.hasOwnProperty('contentCount')) {
        obj['contentCount'] = ApiClient.convertToType(data['contentCount'], 'Number');
      }
      if (data.hasOwnProperty('contentList')) {
        obj['contentList'] = ApiClient.convertToType(data['contentList'], [PlaylistItemResource]);
      }
      if (data.hasOwnProperty('creatorId')) {
        obj['creatorId'] = ApiClient.convertToType(data['creatorId'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('deviceTypeVersion')) {
        obj['deviceTypeVersion'] = ApiClient.convertToType(data['deviceTypeVersion'], 'String');
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDate')) {
        obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'String');
      }
      if (data.hasOwnProperty('metaData')) {
        obj['metaData'] = ApiClient.convertToType(data['metaData'], 'String');
      }
      if (data.hasOwnProperty('playTime')) {
        obj['playTime'] = ApiClient.convertToType(data['playTime'], 'Number');
      }
      if (data.hasOwnProperty('playlistId')) {
        obj['playlistId'] = ApiClient.convertToType(data['playlistId'], 'String');
      }
      if (data.hasOwnProperty('playlistName')) {
        obj['playlistName'] = ApiClient.convertToType(data['playlistName'], 'String');
      }
      if (data.hasOwnProperty('playlistType')) {
        obj['playlistType'] = ApiClient.convertToType(data['playlistType'], 'String');
      }
      if (data.hasOwnProperty('shareFlag')) {
        obj['shareFlag'] = ApiClient.convertToType(data['shareFlag'], 'Number');
      }
      if (data.hasOwnProperty('shuffleFlag')) {
        obj['shuffleFlag'] = ApiClient.convertToType(data['shuffleFlag'], 'String');
      }
      if (data.hasOwnProperty('thumbFileName')) {
        obj['thumbFileName'] = ApiClient.convertToType(data['thumbFileName'], 'String');
      }
      if (data.hasOwnProperty('thumbFilePath')) {
        obj['thumbFilePath'] = ApiClient.convertToType(data['thumbFilePath'], 'String');
      }
      if (data.hasOwnProperty('totalSize')) {
        obj['totalSize'] = ApiClient.convertToType(data['totalSize'], 'Number');
      }
      if (data.hasOwnProperty('versionId')) {
        obj['versionId'] = ApiClient.convertToType(data['versionId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} categoryList
   */
  exports.prototype['categoryList'] = undefined;
  /**
   * @member {Number} contentCount
   */
  exports.prototype['contentCount'] = undefined;
  /**
   * @member {Array.<module:model/PlaylistItemResource>} contentList
   */
  exports.prototype['contentList'] = undefined;
  /**
   * @member {String} creatorId
   */
  exports.prototype['creatorId'] = undefined;
  /**
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * @member {String} deviceTypeVersion
   */
  exports.prototype['deviceTypeVersion'] = undefined;
  /**
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * @member {String} lastModifiedDate
   */
  exports.prototype['lastModifiedDate'] = undefined;
  /**
   * @member {String} metaData
   */
  exports.prototype['metaData'] = undefined;
  /**
   * @member {Number} playTime
   */
  exports.prototype['playTime'] = undefined;
  /**
   * @member {String} playlistId
   */
  exports.prototype['playlistId'] = undefined;
  /**
   * @member {String} playlistName
   */
  exports.prototype['playlistName'] = undefined;
  /**
   * @member {String} playlistType
   */
  exports.prototype['playlistType'] = undefined;
  /**
   * @member {Number} shareFlag
   */
  exports.prototype['shareFlag'] = undefined;
  /**
   * @member {String} shuffleFlag
   */
  exports.prototype['shuffleFlag'] = undefined;
  /**
   * @member {String} thumbFileName
   */
  exports.prototype['thumbFileName'] = undefined;
  /**
   * @member {String} thumbFilePath
   */
  exports.prototype['thumbFilePath'] = undefined;
  /**
   * @member {Number} totalSize
   */
  exports.prototype['totalSize'] = undefined;
  /**
   * @member {Number} versionId
   */
  exports.prototype['versionId'] = undefined;



  return exports;
}));


