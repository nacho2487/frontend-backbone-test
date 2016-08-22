'use strict';

App.module('Example', function (Example, App, Backbone, Marionette, $, _) {

    Example.addInitializer(function(){
        new App.Example.Router();
    });

});
