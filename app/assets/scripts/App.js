var $ = require('jquery');

var Person = require('./modules/Module');

var dylan = new Person("Dylan Hsiao");
dylan.greet();



$(function() {
  console.log( "ready!" );
});
