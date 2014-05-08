{asyncBuilder}= require "./asyncBuilder.js";

asyncBuilder("series",(callback)->
  console.log("everything is completed");
)
.add (callback)->
  setTimeout(->
    console.log("first one");
    callback.call();
  ,200)
.then (callback)->
    console.log("second one");
    callback.call();
.run();

console.log("here is to waiting");