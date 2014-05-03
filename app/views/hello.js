var Backbone = require('backbone');

var helloTemplate = require('templates/hello.hbs');

var WelcomeView = require('views/welcome');

var Hello = Backbone.View.extend({

  template: helloTemplate,

  render: function() {
    this.$el.html(this.template({welcome: this.welcome}));
    return this;
  },

  initialize: function() {
    this.welcome = new WelcomeView();
  }

});
module.exports = Hello;
