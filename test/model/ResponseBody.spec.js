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
    instance = new MagicInfoServerV41RestApi.ResponseBody();
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

  describe('ResponseBody', function() {
    it('should create an instance of ResponseBody', function() {
      // uncomment below and update the code to test ResponseBody
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.ResponseBody);
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property startIndex (base name: "startIndex")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "totalCount")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new MagicInfoServerV41RestApi.ResponseBody();
      //expect(instance).to.be();
    });

  });

}));
