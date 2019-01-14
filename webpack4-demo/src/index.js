var demo = require.ensure([], function (require) {
  return require('@/demo.js');
}, 'demo'); 

console.log(demo)