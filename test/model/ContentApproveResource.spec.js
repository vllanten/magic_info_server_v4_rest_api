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
    instance = new MagicInfoServerV41RestApi.ContentApproveResource();
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

  describe('ContentApproveResource', function() {
    it('should create an instance of ContentApproveResource', function() {
      // uncomment below and update the code to test ContentApproveResource
      //var instane = new MagicInfoServerV41RestApi.ContentApproveResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.ContentApproveResource);
    });

    it('should have the property contentId (base name: "contentId")', function() {
      // uncomment below and update the code to test the property contentId
      //var instane = new MagicInfoServerV41RestApi.ContentApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property opinion (base name: "opinion")', function() {
      // uncomment below and update the code to test the property opinion
      //var instane = new MagicInfoServerV41RestApi.ContentApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MagicInfoServerV41RestApi.ContentApproveResource();
      //expect(instance).to.be();
    });

  });

}));
