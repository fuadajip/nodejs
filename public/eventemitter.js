//Example emitter in JQuery or js
// $('.class').click(function(){ some event });
//Js:
//document.getElementbyId('elements').onclick = function(){callFunc()};
//functioN callFunc(){some event}

//In node event emitter docs https://nodejs.org/api/events.html

try{
    var emitter = function(){
    var emitEvents = require('events');
    var sampleEmitter = new emitEvents.EventEmitter();
    sampleEmitter.on('getEvent', function(message){
        console.log('I get message from event called '+message);
    });
    sampleEmitter.emit('getEvent', 'Mr.Fu');
  }
  function funcEmit(otherfunc){
    otherfunc();
  }
    funcEmit(emitter);

}catch(err){
  console.log('Error require');
}
