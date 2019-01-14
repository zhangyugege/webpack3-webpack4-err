var load = require('load-script')
 
let url = './webpack4-demo/dist/main.js'
load(url, function (err, script) {
  if (err) {
    // print useful message
  }
  else {
    console.log(script.src);// Prints 'foo'.js'
    // use script
    // note that in IE8 and below loading error wouldn't be reported
  }
})

var demo = require.ensure([], function (require) {
  return require('@/demo.js');
}, 'demo'); 

console.log(demo)