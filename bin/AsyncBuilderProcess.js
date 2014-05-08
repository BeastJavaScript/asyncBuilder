// Generated by CoffeeScript 1.7.1
var AsyncBuilderProcess;

AsyncBuilderProcess = (function() {
  function AsyncBuilderProcess() {}

  AsyncBuilderProcess.prototype.init = function() {
    var arg, _i, _len;
    if (typeof process !== "undefined") {
      this.async = require("async");
    } else {
      this.async = async;
    }
    this.original_args = [];
    for (_i = 0, _len = arguments.length; _i < _len; _i++) {
      arg = arguments[_i];
      this.original_args.push(arg);
    }
    this.task = [];
    return this;
  };

  AsyncBuilderProcess.prototype.push = function(task) {
    this.task.push(task);
    return this;
  };

  AsyncBuilderProcess.prototype.add = function() {
    return this.push.apply(this, arguments);
  };

  AsyncBuilderProcess.prototype.then = function() {
    return this.push.apply(this, arguments);
  };

  AsyncBuilderProcess.prototype.run = function() {
    var arg, func, params, runner, tasks, _i, _len, _ref;
    func = Array.prototype.shift.apply(this.original_args);
    if (typeof func === "string") {
      runner = this.async[func];
      tasks = this.task;
      params = [];
      params[0] = tasks;
      _ref = this.original_args;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        arg = _ref[_i];
        params.push(arg);
      }
      return runner.apply(null, params);
    }
  };

  AsyncBuilderProcess.prototype.pass = function() {
    var func, runner;
    func = Array.prototype.shift.apply(Array, this.original_args);
    if (typeof func === "string") {
      runner = this.async[func];
      return runner.apply(null, this.original_args);
    }
  };

  return AsyncBuilderProcess;

})();

if (typeof process !== "undefined") {
  exports.AsyncBuilderProcess = AsyncBuilderProcess;
}
