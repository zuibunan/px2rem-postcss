'use strict';

var postcss = require('postcss');
var Px2rem = require('px2rem-dpr');

module.exports = postcss.plugin('postcss-px2rem', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2remIns = new Px2rem(options);
    var newCssText = px2remIns.generateRem(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});
