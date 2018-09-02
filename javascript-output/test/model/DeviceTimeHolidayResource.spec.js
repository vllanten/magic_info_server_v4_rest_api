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
    instance = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
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

  describe('DeviceTimeHolidayResource', function() {
    it('should create an instance of DeviceTimeHolidayResource', function() {
      // uncomment below and update the code to test DeviceTimeHolidayResource
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.DeviceTimeHolidayResource);
    });

    it('should have the property command (base name: "command")', function() {
      // uncomment below and update the code to test the property command
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

    it('should have the property day1 (base name: "day1")', function() {
      // uncomment below and update the code to test the property day1
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

    it('should have the property day2 (base name: "day2")', function() {
      // uncomment below and update the code to test the property day2
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

    it('should have the property holidaySeq (base name: "holidaySeq")', function() {
      // uncomment below and update the code to test the property holidaySeq
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

    it('should have the property month1 (base name: "month1")', function() {
      // uncomment below and update the code to test the property month1
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

    it('should have the property month2 (base name: "month2")', function() {
      // uncomment below and update the code to test the property month2
      //var instane = new MagicInfoServerV41RestApi.DeviceTimeHolidayResource();
      //expect(instance).to.be();
    });

  });

}));
