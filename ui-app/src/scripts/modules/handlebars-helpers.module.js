App.module('HandlebarsHelpers', function (HandlebarsRegisters, App, Backbone, Marionette, $, _) {

    var utils = App.module('Utils');
    var config = App.module('Config');

    /**
     * util
     * Return value of util variables
     * Usage:   {{util variable}}
     *          {{util module.variable}}
     * Example: {{util device}}
     *          {{util questions.userType}}
     */
    Handlebars.registerHelper('util', function (scope, key) {
        if (!key) {
            return utils[scope];
        }
        return utils[scope][key];
    });

    /**
     * isMobile
     * Return true if is mobile, false if is desktop or tablet
     * Usage: {{isMobile}}
     */
    Handlebars.registerHelper('isMobile', function (options) {
        return (config.device === 'mobile') ? options.fn(this) : options.inverse(this);
    });

    /**
     * isNotMobile
     * Return true if is desktop or tablet, false if is mobile
     * Usage: {{isNotMobile}}
     */
    Handlebars.registerHelper('isNotMobile', function (options) {
        return (config.device !== 'mobile') ? options.fn(this) : options.inverse(this);
    });

    /**
     * tr
     * Return translation value
     * Usage:   {{tr "text"}}
     *          {{tr "text" "variable1" "variable2" "variableN"}}
     * Example: {{tr "Últimos {0} días" "10"}} //Últimos 10 días
     */
    Handlebars.registerHelper('tr', function () {
        if (arguments.length < 1) {
            throw new Error('Handlerbars Helper "tr" needs 1 parameter');
        }

        if (__tr === undefined) {
            throw new Error('__tr is not defined');
        }

        var str  = arguments[0];
        var opts = arguments[arguments.length - 1];
        var out = __tr.get(str, config.country);

        if (out === undefined) {
            if (typeof(console) == 'object') {
                console.error('__tr is not defined for ' + str);
            }
            out = str;
        }

        var replacements = [];
        for (var i = 1; i < (arguments.length - 1); i++) {
            replacements.push(arguments[i]);
        }

        for (var i = 0; i < replacements.length; i++) {
            out = out.replace('{' + i + '}', replacements[i]);
        }

        return out;
    });

    /**
     * urls
     * Read App.Url object and return the value of the param key
     * Usage: {{urls "module" "param"}}
     * Example: {{urls "meli" "modifyItem"}}
     * Example: {{urls "questions" "modifyItem"}}
     */
    Handlebars.registerHelper('urls', function () {
        return App.module('Urls').get.apply(null, arguments);
    });

    /**
     * xif
     * A helper to execute an IF statement with any expression
     * USAGE:
     * -- Yes you NEED to properly escape the string literals, or just alternate
     *    single and double quotes
     * -- to access any global function or property you should use window.functionName()
     *    instead of just functionName()
     * -- this example assumes you passed this context to your handlebars
     *    template( {name: 'Sam', age: '20' } ), notice age is a string, just
     *    for so I can demo parseInt later
     * @example
     * <p>
     *  {{#xif " this.name == 'Sam' && this.age === '12' " }}
     *    BOOM
     *  {{else}}
     *    BAMM
     *  {{/xif}}
     * </p>
    */
    Handlebars.registerHelper('xif', function (expression, options) {
        return Handlebars.helpers['x'].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
    });

    /**
     * x
     * A helper to execute javascript expressions
     * USAGE:
     * -- Yes you NEED to properly escape the string literals or just alternate single and double quotes
     * -- to access any global function or property you should use window.functionName() instead of just functionName(), notice how I had to use window.parseInt() instead of parseInt()
     * -- this example assumes you passed this context to your handlebars template( {name: 'Sam', age: '20' } )
     * @example
     * <p>Url: {{x " \"hi\" + this.name + \", \" + window.location.href + \" <---- this is your href,\" + " your Age is:" + window.parseInt(this.age, 10) "}}</p>
     * // OUTPUT:
     * <p>Url: hi Sam, http://example.com <---- this is your href, your Age is: 20</p>
     */
    Handlebars.registerHelper('x', function (expression, options) {
        var fn = function () {},
            result;

        try {
            fn = Function.apply(this, ['window', 'return ' + expression + ' ;']);
        } catch (e) {
            console.warn('{{x ' + expression + '}} has invalid javascript', e);
        }

        try {
            result = fn.call(this, window);
        } catch (e) {
            console.warn('{{x ' + expression + '}} hit a runtime error', e);
        }

        return result;
    });

});
