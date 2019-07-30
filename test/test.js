(function () {
  var nx = require('next-js-core2');
  var NxFinxosElementType = require('../src/next-finxos-element-type');

  describe('basic test', function () {
    test('get by value', function () {
      var v1 = NxFinxosElementType.get(1);
      var v2 = NxFinxosElementType.get(2);
      var v3 = NxFinxosElementType.get(3);
      var v4 = NxFinxosElementType.get(4);
      expect(v1.code).toBe('chart');
      expect(v2.code).toBe('data');
      expect(v3.code).toBe('article');
      expect(v4.code).toBe('report');
    });
  });
}());
