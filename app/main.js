var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var Handlebars = require('hbsfy/runtime');
var Handlebones = require('handlebones/handlebones');

var HelloView = require('views/hello');

$(document).ready(function() {
  var view = new HelloView({el: $('#hello')});
  view.render();
});
