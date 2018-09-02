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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MagicInfoServerV41RestApi);
  }
}(this, function(expect, MagicInfoServerV41RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoServerV41RestApi.PlaylistControllerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PlaylistControllerApi', function() {
    describe('copyPlaylistUsingPUT1', function() {
      it('should call copyPlaylistUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test copyPlaylistUsingPUT1
        //instance.copyPlaylistUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPlaylistUsingPOST', function() {
      it('should call createPlaylistUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPlaylistUsingPOST
        //instance.createPlaylistUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePlaylistUsingDELETE', function() {
      it('should call deletePlaylistUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deletePlaylistUsingDELETE
        //instance.deletePlaylistUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editPlaylistUsingPUT', function() {
      it('should call editPlaylistUsingPUT successfully', function(done) {
        //uncomment below and update the code to test editPlaylistUsingPUT
        //instance.editPlaylistUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActivePlaylistInfoUsingGET', function() {
      it('should call getActivePlaylistInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test getActivePlaylistInfoUsingGET
        //instance.getActivePlaylistInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardPlaylistInfoUsingGET1', function() {
      it('should call getDashboardPlaylistInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getDashboardPlaylistInfoUsingGET1
        //instance.getDashboardPlaylistInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllPlaylistUsingGET1', function() {
      it('should call listAllPlaylistUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listAllPlaylistUsingGET1
        //instance.listAllPlaylistUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPlaylistUsingPOST1', function() {
      it('should call listPlaylistUsingPOST1 successfully', function(done) {
        //uncomment below and update the code to test listPlaylistUsingPOST1
        //instance.listPlaylistUsingPOST1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
