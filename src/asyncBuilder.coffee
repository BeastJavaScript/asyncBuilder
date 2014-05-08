if typeof process isnt "undefined"
  {AsyncBuilderProcess}=require "./AsyncBuilderProcess.js";

asyncBuilder=->
  as= new AsyncBuilderProcess();
  as.init.apply(as,arguments);


if typeof process isnt "undefined"
  exports.asyncBuilder=asyncBuilder