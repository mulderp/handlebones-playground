var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper("view", function (view) {
    if (!view) {
      return "";
    }
    var htmlAttributes = {
      // ensure generated placeholder tag in template
      // will match tag of view instance
      tagName: view.el.tagName.toLowerCase()
    };
    htmlAttributes[viewPlaceholderAttributeName] = view.cid;
    var output = "stub"; // Handlebones.Util.tag(htmlAttributes, "", this);
    return new Handlebars.SafeString(output);
  });

var HelloView = require('views/hello');

$(document).ready(function() {
  var view = new HelloView({el: $('#hello')});
  view.render();
});
