/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.ContentScheduleGroupControllerApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * MagicInfo Server V4 REST API
 * Version: 1.0.0
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.ContentScheduleGroupControllerApi');

goog.require('API.Client.Error');
goog.require('API.Client.ResponseBody');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.ContentScheduleGroupControllerApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('ContentScheduleGroupControllerApiBasePath') ?
                   /** @type {!string} */ ($injector.get('ContentScheduleGroupControllerApiBasePath')) :
                   'http://magicinfo.icluster.cl:7001/MagicInfo';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('ContentScheduleGroupControllerApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('ContentScheduleGroupControllerApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.ContentScheduleGroupControllerApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * getChildGroups
 * 
 * @param {!string} groupId groupId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleGroupControllerApi.prototype.getChildGroupsUsingGET = function(groupId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/groups/{groupId}/child'
      .replace('{' + 'groupId' + '}', String(groupId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'groupId' is set
  if (!groupId) {
    throw new Error('Missing required parameter groupId when calling getChildGroupsUsingGET');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * getRootGroups
 * 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleGroupControllerApi.prototype.getRootGroupsUsingGET = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/groups';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * listContentScheduleGroupInfo
 * 
 * @param {!number} groupId groupId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleGroupControllerApi.prototype.listContentScheduleGroupInfoUsingGET = function(groupId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/groups/{groupId}'
      .replace('{' + 'groupId' + '}', String(groupId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'groupId' is set
  if (!groupId) {
    throw new Error('Missing required parameter groupId when calling listContentScheduleGroupInfoUsingGET');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
