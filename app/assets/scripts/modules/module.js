function Person(fullName){
  this.name = fullName;
  this.greet = function(){
    console.log("Hello, my name is "+ this.name +". ");
  };
}


function showProjectOverlay(){
  
}

module.exports = Person;
