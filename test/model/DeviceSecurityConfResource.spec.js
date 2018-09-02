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
    instance = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
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

  describe('DeviceSecurityConfResource', function() {
    it('should create an instance of DeviceSecurityConfResource', function() {
      // uncomment below and update the code to test DeviceSecurityConfResource
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.DeviceSecurityConfResource);
    });

    it('should have the property isInitSecurity (base name: "isInitSecurity")', function() {
      // uncomment below and update the code to test the property isInitSecurity
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscAllLock (base name: "miscAllLock")', function() {
      // uncomment below and update the code to test the property miscAllLock
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscBlockNetworkConnection (base name: "miscBlockNetworkConnection")', function() {
      // uncomment below and update the code to test the property miscBlockNetworkConnection
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscBlockUsbPort (base name: "miscBlockUsbPort")', function() {
      // uncomment below and update the code to test the property miscBlockUsbPort
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscPanelLock (base name: "miscPanelLock")', function() {
      // uncomment below and update the code to test the property miscPanelLock
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscRemocon (base name: "miscRemocon")', function() {
      // uncomment below and update the code to test the property miscRemocon
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscWhiteList (base name: "miscWhiteList")', function() {
      // uncomment below and update the code to test the property miscWhiteList
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntSafetyLock (base name: "mntSafetyLock")', function() {
      // uncomment below and update the code to test the property mntSafetyLock
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

    it('should have the property touchControlLock (base name: "touchControlLock")', function() {
      // uncomment below and update the code to test the property touchControlLock
      //var instane = new MagicInfoServerV41RestApi.DeviceSecurityConfResource();
      //expect(instance).to.be();
    });

  });

}));
