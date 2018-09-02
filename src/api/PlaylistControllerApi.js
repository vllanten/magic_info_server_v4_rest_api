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
    define(['ApiClient', 'model/Error', 'model/PlaylistFilter', 'model/PlaylistResource', 'model/ResponseBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PlaylistFilter'), require('../model/PlaylistResource'), require('../model/ResponseBody'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV41RestApi) {
      root.MagicInfoServerV41RestApi = {};
    }
    root.MagicInfoServerV41RestApi.PlaylistControllerApi = factory(root.MagicInfoServerV41RestApi.ApiClient, root.MagicInfoServerV41RestApi.Error, root.MagicInfoServerV41RestApi.PlaylistFilter, root.MagicInfoServerV41RestApi.PlaylistResource, root.MagicInfoServerV41RestApi.ResponseBody);
  }
}(this, function(ApiClient, Error, PlaylistFilter, PlaylistResource, ResponseBody) {
  'use strict';

  /**
   * PlaylistController service.
   * @module api/PlaylistControllerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PlaylistControllerApi. 
   * @alias module:api/PlaylistControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the copyPlaylistUsingPUT1 operation.
     * @callback module:api/PlaylistControllerApi~copyPlaylistUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * copyPlaylist
     * @param {String} playlistId playlistId
     * @param {module:model/PlaylistResource} params params
     * @param {module:api/PlaylistControllerApi~copyPlaylistUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.copyPlaylistUsingPUT1 = function(playlistId, params, callback) {
      var postBody = params;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling copyPlaylistUsingPUT1");
      }

      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling copyPlaylistUsingPUT1");
      }


      var pathParams = {
        'playlistId': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists/{playlistId}/copy', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPlaylistUsingPOST operation.
     * @callback module:api/PlaylistControllerApi~createPlaylistUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createPlaylist
     * @param {module:model/PlaylistResource} params params
     * @param {module:api/PlaylistControllerApi~createPlaylistUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.createPlaylistUsingPOST = function(params, callback) {
      var postBody = params;

      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling createPlaylistUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePlaylistUsingDELETE operation.
     * @callback module:api/PlaylistControllerApi~deletePlaylistUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletePlaylist
     * @param {String} playlistId playlistId
     * @param {module:api/PlaylistControllerApi~deletePlaylistUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.deletePlaylistUsingDELETE = function(playlistId, callback) {
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling deletePlaylistUsingDELETE");
      }


      var pathParams = {
        'playlistId': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists/{playlistId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editPlaylistUsingPUT operation.
     * @callback module:api/PlaylistControllerApi~editPlaylistUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * editPlaylist
     * @param {String} playlistId playlistId
     * @param {module:model/PlaylistResource} params params
     * @param {module:api/PlaylistControllerApi~editPlaylistUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.editPlaylistUsingPUT = function(playlistId, params, callback) {
      var postBody = params;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling editPlaylistUsingPUT");
      }

      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling editPlaylistUsingPUT");
      }


      var pathParams = {
        'playlistId': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists/{playlistId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivePlaylistInfoUsingGET operation.
     * @callback module:api/PlaylistControllerApi~getActivePlaylistInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getActivePlaylistInfo
     * @param {String} playlistId playlistId
     * @param {module:api/PlaylistControllerApi~getActivePlaylistInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.getActivePlaylistInfoUsingGET = function(playlistId, callback) {
      var postBody = null;

      // verify the required parameter 'playlistId' is set
      if (playlistId === undefined || playlistId === null) {
        throw new Error("Missing the required parameter 'playlistId' when calling getActivePlaylistInfoUsingGET");
      }


      var pathParams = {
        'playlistId': playlistId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists/{playlistId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDashboardPlaylistInfoUsingGET1 operation.
     * @callback module:api/PlaylistControllerApi~getDashboardPlaylistInfoUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getDashboardPlaylistInfo
     * @param {module:api/PlaylistControllerApi~getDashboardPlaylistInfoUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.getDashboardPlaylistInfoUsingGET1 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists/dashboard', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllPlaylistUsingGET1 operation.
     * @callback module:api/PlaylistControllerApi~listAllPlaylistUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listAllPlaylist
     * @param {Number} startIndex startIndex
     * @param {Number} pageSize pageSize
     * @param {module:api/PlaylistControllerApi~listAllPlaylistUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listAllPlaylistUsingGET1 = function(startIndex, pageSize, callback) {
      var postBody = null;

      // verify the required parameter 'startIndex' is set
      if (startIndex === undefined || startIndex === null) {
        throw new Error("Missing the required parameter 'startIndex' when calling listAllPlaylistUsingGET1");
      }

      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling listAllPlaylistUsingGET1");
      }


      var pathParams = {
      };
      var queryParams = {
        'startIndex': startIndex,
        'pageSize': pageSize,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPlaylistUsingPOST1 operation.
     * @callback module:api/PlaylistControllerApi~listPlaylistUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listPlaylist
     * @param {module:model/PlaylistFilter} filter filter
     * @param {module:api/PlaylistControllerApi~listPlaylistUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listPlaylistUsingPOST1 = function(filter, callback) {
      var postBody = filter;

      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling listPlaylistUsingPOST1");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/playlists/filter', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));