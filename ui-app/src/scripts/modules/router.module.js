'use strict';

App.module('Example.Router', function (Router, App, Backbone, Marionette, $, _) {
    'use strict';

    var controller = {},
        routes = {};

    controller.index = function () {

        console.log('Hola Mundo!');

        // App.getRegion('main').show(someView);
    };

    /**
     * Example.Router
     */
     routes = {
        '': 'index'
    };

    /**
     * Example.Controller
     */
    App.Example.Controller = controller;
    App.Example.Router = Marionette.AppRouter.extend({
        'appRoutes': routes,
        'controller': controller
    });

});
