/*!
 * name: next-finxos-element-type
 * url: https://github.com/afeiship/next-finxos-element-type
 * version: 1.0.0
 * date: 2019-07-30T03:50:53.952Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var TYPES = [
    {
      value: 1,
      label: '图表',
      code: 'chart',
      unit: '张'
    },
    {
      value: 2,
      label: '数据',
      code: 'data',
      unit: '条'
    },
    {
      value: 3,
      label: '文章',
      code: 'article',
      unit: '篇'
    },
    {
      value: 4,
      label: '报告',
      code: 'report',
      unit: '篇'
    }
  ];

  var NxFinxosElementType = nx.declare('nx.FinxosElementType', {
    statics: {
      gets: function() {
        return TYPES;
      },
      get: function(inValue, inField) {
        var field = inField || 'value';
        return TYPES.find(function(item) {
          return item[field] === inValue;
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxFinxosElementType;
  }
})();

//# sourceMappingURL=next-finxos-element-type.js.map
