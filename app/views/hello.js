var Backbone = require('backbone');
var Handlebones = require('handlebones/handlebones');

var helloTemplate = require('templates/hello.hbs');

var WelcomeView = require('views/welcome');

var Hello = Handlebones.View.extend({

  template: helloTemplate,

  render: function() {
    this.$el.html(this.template(this));
    return this;
  },

  initialize: function() {
    this.welcome = new WelcomeView();
  }

});
module.exports = Hello;
