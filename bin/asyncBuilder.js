// Generated by CoffeeScript 1.7.1
var AsyncBuilderProcess, asyncBuilder;

if (typeof process !== "undefined") {
  AsyncBuilderProcess = require("./AsyncBuilderProcess.js").AsyncBuilderProcess;
}

asyncBuilder = function() {
  var as;
  as = new AsyncBuilderProcess();
  return as.init.apply(as, arguments);
};

if (typeof process !== "undefined") {
  exports.asyncBuilder = asyncBuilder;
}
