App.module('Utils', function (Utils, App, Backbone, Marionette, $, _) {

    var Urls = App.module('Urls');

    /**
     * Defines a global reference for the depth of the layout navigation. Update
     * this parameter on router methods.
     * @example
     * "1" for first navigation level: Root, Listing, etc.
     * "2" for second navigation level: Detail page, etc.
     * "0" for secondary actions: Internal flows, No navigation level, etc.
     */
    Utils.viewType = 1;

    /**
     * Defines an object containing URL vs. Controller method.
     * @function
     * @param namespace String with the name of the module (same as URLs keys).
     * @param keys Array with methods name (same as URLs keys).
     * @example
     * Utils.defineSingleRoutes('catalog', [
     *   'root',
     *   'listing'
     * ]);
     * @returns
     * {
     *   'catalog:root': 'root',
     *   'catalog:listing': 'listing'
     * }
     */
    Utils.defineSingleRoutes = function (namespace, keysCollection) {
        var routes = {};
        _.each(keysCollection, function (key) {
            routes[Urls.get(namespace + ':' + key)] = key;
        });
        return routes;
    };

    /**
     * Defines an object containing URL vs. Controller method.
     * @function
     * @param namespace String with the name of the module (same as URLs keys).
     * @param keys Object with methods name and arrays with keys (same as URLs keys).
     * @example
     * Utils.defineMultipleRoutes('catalog', {
     *   'createAndEdit': ['create', 'edit']
     * });
     * @returns
     * {
     *   'catalog:create': 'createAndEdit',
     *   'catalog:edit': 'createAndEdit'
     * }
     */
    Utils.defineMultipleRoutes = function (namespace, keysMap) {
        var routes = {};
        _.each(Object.keys(keysMap), function (methodName) {
            _.each(keysMap[methodName], function (key) {
                routes[Urls.get(namespace + ':' + key)] = methodName;
            });
        });
        return routes;
    };
});
