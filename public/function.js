function simple(){
  console.log('Hi i\' simple function');
}
simple();


//Call function inside another function as param
var app = function(){
  console.log('Hi i\'m app');
}
function greatFunc(smallfun){
  smallfun();
}
greatFunc(app);

//Function with return value
var app2 = function(fu){
  return "Hi i\'m return value from " + fu;
}
console.log(app2("fuadajip"));
