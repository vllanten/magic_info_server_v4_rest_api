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
    instance = new MagicInfoServerV41RestApi.ContentControllerApi();
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

  describe('ContentControllerApi', function() {
    describe('approveContentsUsingPUT1', function() {
      it('should call approveContentsUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test approveContentsUsingPUT1
        //instance.approveContentsUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContentUsingDELETE1', function() {
      it('should call deleteContentUsingDELETE1 successfully', function(done) {
        //uncomment below and update the code to test deleteContentUsingDELETE1
        //instance.deleteContentUsingDELETE1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forceDeleteContentUsingDELETE1', function() {
      it('should call forceDeleteContentUsingDELETE1 successfully', function(done) {
        //uncomment below and update the code to test forceDeleteContentUsingDELETE1
        //instance.forceDeleteContentUsingDELETE1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActiveContentInfoUsingGET', function() {
      it('should call getActiveContentInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test getActiveContentInfoUsingGET
        //instance.getActiveContentInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllContentUsingGET', function() {
      it('should call listAllContentUsingGET successfully', function(done) {
        //uncomment below and update the code to test listAllContentUsingGET
        //instance.listAllContentUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContentUsingPOST1', function() {
      it('should call listContentUsingPOST1 successfully', function(done) {
        //uncomment below and update the code to test listContentUsingPOST1
        //instance.listContentUsingPOST1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardContentInfoUsingGET', function() {
      it('should call listDashboardContentInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test listDashboardContentInfoUsingGET
        //instance.listDashboardContentInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadContentUsingPOST', function() {
      it('should call uploadContentUsingPOST successfully', function(done) {
        //uncomment below and update the code to test uploadContentUsingPOST
        //instance.uploadContentUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));