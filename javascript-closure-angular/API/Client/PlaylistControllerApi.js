/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.PlaylistControllerApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * MagicInfo Server V4 REST API
 * Version: 1.0.0
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.PlaylistControllerApi');

goog.require('API.Client.Error');
goog.require('API.Client.PlaylistFilter');
goog.require('API.Client.PlaylistResource');
goog.require('API.Client.ResponseBody');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.PlaylistControllerApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('PlaylistControllerApiBasePath') ?
                   /** @type {!string} */ ($injector.get('PlaylistControllerApiBasePath')) :
                   'http://magicinfo.icluster.cl:7001/MagicInfo';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('PlaylistControllerApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('PlaylistControllerApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.PlaylistControllerApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * copyPlaylist
 * 
 * @param {!string} playlistId playlistId
 * @param {!PlaylistResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.copyPlaylistUsingPUT1 = function(playlistId, params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists/{playlistId}/copy'
      .replace('{' + 'playlistId' + '}', String(playlistId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'playlistId' is set
  if (!playlistId) {
    throw new Error('Missing required parameter playlistId when calling copyPlaylistUsingPUT1');
  }
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling copyPlaylistUsingPUT1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * createPlaylist
 * 
 * @param {!PlaylistResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.createPlaylistUsingPOST = function(params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling createPlaylistUsingPOST');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * deletePlaylist
 * 
 * @param {!string} playlistId playlistId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.deletePlaylistUsingDELETE = function(playlistId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists/{playlistId}'
      .replace('{' + 'playlistId' + '}', String(playlistId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'playlistId' is set
  if (!playlistId) {
    throw new Error('Missing required parameter playlistId when calling deletePlaylistUsingDELETE');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
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
 * editPlaylist
 * 
 * @param {!string} playlistId playlistId
 * @param {!PlaylistResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.editPlaylistUsingPUT = function(playlistId, params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists/{playlistId}'
      .replace('{' + 'playlistId' + '}', String(playlistId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'playlistId' is set
  if (!playlistId) {
    throw new Error('Missing required parameter playlistId when calling editPlaylistUsingPUT');
  }
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling editPlaylistUsingPUT');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * getActivePlaylistInfo
 * 
 * @param {!string} playlistId playlistId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.getActivePlaylistInfoUsingGET = function(playlistId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists/{playlistId}'
      .replace('{' + 'playlistId' + '}', String(playlistId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'playlistId' is set
  if (!playlistId) {
    throw new Error('Missing required parameter playlistId when calling getActivePlaylistInfoUsingGET');
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
 * getDashboardPlaylistInfo
 * 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.getDashboardPlaylistInfoUsingGET1 = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists/dashboard';

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
 * listAllPlaylist
 * 
 * @param {!number} startIndex startIndex
 * @param {!number} pageSize pageSize
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.listAllPlaylistUsingGET1 = function(startIndex, pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'startIndex' is set
  if (!startIndex) {
    throw new Error('Missing required parameter startIndex when calling listAllPlaylistUsingGET1');
  }
  // verify required parameter 'pageSize' is set
  if (!pageSize) {
    throw new Error('Missing required parameter pageSize when calling listAllPlaylistUsingGET1');
  }
  if (startIndex !== undefined) {
    queryParameters['startIndex'] = startIndex;
  }

  if (pageSize !== undefined) {
    queryParameters['pageSize'] = pageSize;
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
 * listPlaylist
 * 
 * @param {!PlaylistFilter} filter filter
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.PlaylistControllerApi.prototype.listPlaylistUsingPOST1 = function(filter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/cms/playlists/filter';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'filter' is set
  if (!filter) {
    throw new Error('Missing required parameter filter when calling listPlaylistUsingPOST1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: filter,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
