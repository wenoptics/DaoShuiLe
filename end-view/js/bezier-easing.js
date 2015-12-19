window.BezierEasing = require('bezier-easing');
var a=BezierEasing(0,.5,.5,1);
console.log(a.get(0.7));