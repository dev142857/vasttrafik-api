/*
 * Reseplaneraren
 * Provides access to Västtrafik journey planner
 *
 * OpenAPI spec version: 1.10.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
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
    factory(root.expect, root.Reseplaneraren);
  }
}(this, function(expect, Reseplaneraren) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Destination', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.Destination();
      });

      it('should create an instance of Destination', function() {
        // TODO: update the code to test Destination
        expect(instance).to.be.a(Reseplaneraren.Destination);
      });

      it('should have the property routeIdx (base name: "routeIdx")', function() {
        // TODO: update the code to test the property routeIdx
        expect(instance).to.have.property('routeIdx');
        // expect(instance.routeIdx).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "$")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property cancelled (base name: "cancelled")', function() {
        // TODO: update the code to test the property cancelled
        expect(instance).to.have.property('cancelled');
        // expect(instance.cancelled).to.be(expectedValueLiteral);
      });

      it('should have the property track (base name: "track")', function() {
        // TODO: update the code to test the property track
        expect(instance).to.have.property('track');
        // expect(instance.track).to.be(expectedValueLiteral);
      });

      it('should have the property rtTrack (base name: "rtTrack")', function() {
        // TODO: update the code to test the property rtTrack
        expect(instance).to.have.property('rtTrack');
        // expect(instance.rtTrack).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "Notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property rtDate (base name: "rtDate")', function() {
        // TODO: update the code to test the property rtDate
        expect(instance).to.have.property('rtDate');
        // expect(instance.rtDate).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property directdate (base name: "directdate")', function() {
        // TODO: update the code to test the property directdate
        expect(instance).to.have.property('directdate');
        // expect(instance.directdate).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property rtTime (base name: "rtTime")', function() {
        // TODO: update the code to test the property rtTime
        expect(instance).to.have.property('rtTime');
        // expect(instance.rtTime).to.be(expectedValueLiteral);
      });

      it('should have the property directtime (base name: "directtime")', function() {
        // TODO: update the code to test the property directtime
        expect(instance).to.have.property('directtime');
        // expect(instance.directtime).to.be(expectedValueLiteral);
      });

    });
  });

}));
