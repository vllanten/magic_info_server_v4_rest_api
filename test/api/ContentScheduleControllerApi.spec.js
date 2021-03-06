/**
 * magic info api
 * magic info api
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    factory(root.expect, root.MagicInfoApi);
  }
}(this, function(expect, MagicInfoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoApi.ContentScheduleControllerApi();
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

  describe('ContentScheduleControllerApi', function() {
    describe('copyContentScheduleUsingPUT1', function() {
      it('should call copyContentScheduleUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test copyContentScheduleUsingPUT1
        //instance.copyContentScheduleUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createContentScheduleUsingPOST1', function() {
      it('should call createContentScheduleUsingPOST1 successfully', function(done) {
        //uncomment below and update the code to test createContentScheduleUsingPOST1
        //instance.createContentScheduleUsingPOST1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContentScheduleUsingDELETE', function() {
      it('should call deleteContentScheduleUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteContentScheduleUsingDELETE
        //instance.deleteContentScheduleUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deployContentScheduleUsingPUT', function() {
      it('should call deployContentScheduleUsingPUT successfully', function(done) {
        //uncomment below and update the code to test deployContentScheduleUsingPUT
        //instance.deployContentScheduleUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editContentScheduleUsingPUT', function() {
      it('should call editContentScheduleUsingPUT successfully', function(done) {
        //uncomment below and update the code to test editContentScheduleUsingPUT
        //instance.editContentScheduleUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProgramInfoUsingGET1', function() {
      it('should call getProgramInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getProgramInfoUsingGET1
        //instance.getProgramInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublishStatusUsingGET', function() {
      it('should call getPublishStatusUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPublishStatusUsingGET
        //instance.getPublishStatusUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContentScheduleAllUsingGET1', function() {
      it('should call listContentScheduleAllUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listContentScheduleAllUsingGET1
        //instance.listContentScheduleAllUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listContentScheduleByGroupUsingPOST1', function() {
      it('should call listContentScheduleByGroupUsingPOST1 successfully', function(done) {
        //uncomment below and update the code to test listContentScheduleByGroupUsingPOST1
        //instance.listContentScheduleByGroupUsingPOST1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardScheduleInfoUsingGET', function() {
      it('should call listDashboardScheduleInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test listDashboardScheduleInfoUsingGET
        //instance.listDashboardScheduleInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
