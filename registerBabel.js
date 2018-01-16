/* eslint-disable */
require('babel-core/register')({
  ignore: /node_modules/
})
require('babel-polyfill')
global.requestIdleCallback = require('ric-shim')
global.cancelIdleCallback = global.requestIdleCallback.cancelIdleCallback
