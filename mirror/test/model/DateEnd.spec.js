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
    describe('DateEnd', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.DateEnd();
      });

      it('should create an instance of DateEnd', function() {
        // TODO: update the code to test DateEnd
        expect(instance).to.be.a(Reseplaneraren.DateEnd);
      });

      it('should have the property value (base name: "$")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
