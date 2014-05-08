class AsyncBuilderProcess
  constructor:->

  init:->
    if typeof process isnt "undefined"
      @async= require("async");
    else
      @async=async;
    @original_args=[];
    for arg in arguments
      @original_args.push arg;
    @task=[];
    @


  push:(task)->
    @task.push(task);
    @

  add:->
    @push.apply(this,arguments);

  then:->
    @push.apply(this,arguments);

  run:->
    func= Array.prototype.shift.apply(@original_args);
    if typeof func is "string"
      runner=@async[func];
      tasks=@task;
      params=[];
      params[0]=tasks;
      for arg in @original_args
        params.push(arg);
      runner.apply(null,params);

  pass:->
    func= Array.prototype.shift.apply(Array,@original_args);
    if typeof func is "string"
      runner=@async[func];
      runner.apply(null,@original_args);

if typeof process isnt "undefined"
  exports.AsyncBuilderProcess=AsyncBuilderProcess;





