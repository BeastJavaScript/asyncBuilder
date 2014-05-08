#asyncBuilder
 by [beastjavascript](https://twitter.com/BeastJavaScript)

This is a wrapper to the popular async module.
It allows for chaining on the task.
It is pretty straight forward to use. Just pass the name of the async function to use and the rest of the parameter, then begin to add task to the list.

For all the functions you can use check here [async github](ashttps://github.com/caolan/async)


example

	asyncBuilder('series',function(){
    
    console.log("everything is finished now")
    
    }).then(function(callback){
    	
        ///Your async function here
        
        setTimeout(function(){
        	console.log("i am number one");
            callback.call();
        },200)
        
    }).then(function(callback){
    
    	console.log("i am number two")
        
    }).run()
    
    
    
###Output
	i am number one
    i am number two

if we wanted to run these in parallel then we would just type this instead


	asyncBuilder('parallel',function(){
    
    console.log("everything is finished now")
    
    }).then(function(callback){
    	
        ///Your async function here
        
        setTimeout(function(){
        	console.log("i am number one");
            callback.call();
        },200)
        
    }).then(function(callback){
    
    	console.log("i am number two")
        
    }).run()
    
    
###Output
	i am number two
    i am number one
    
    
    
    
    
    
    
    
    
    
    
    