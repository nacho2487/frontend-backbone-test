// App.js
;(function (win) {

    // Check if app its launched
    if (win.App) { return; }

    // Create app
    var App = new Backbone.Marionette.Application();

    App.addRegions({
        'mainRegion': '#app-container'
    });

    // Subscribe to "start" application event
    App.on('start', function() {
        Backbone.history.start({'pushState': true});
    });

    // Export Application
    win.App = App;

    // Start the App app
    $(function() {
        // This fire "start" application event
        App.start();
    });
}(window));
