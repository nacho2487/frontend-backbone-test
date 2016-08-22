exports.scripts = [
    'src/scripts/polyfills.js',

    // Marionette
    'node_modules/jquery/dist/jquery.js',
    'node_modules/handlebars/dist/handlebars.js',
    'node_modules/underscore/underscore.js',
    'node_modules/backbone/backbone.js',
    'node_modules/backbone.marionette/lib/backbone.marionette.js',

    // Application and Configs
    'src/scripts/app.js',

    // Modules
    'src/scripts/modules/handlebars-helpers.module.js',
    'src/scripts/modules/utils.module.js',
    'src/scripts/modules/urls.module.js',
    'src/scripts/modules/config.module.js',

    'src/scripts/modules/router.module.js',

    'src/scripts/modules/example.module.js'

    // Models

    // Collections

    // Views
];

exports.styles = [
    './src/styles/**/*.scss'
];

exports.fonts = [
    './src/fonts/**/*.{ttf,woff,eof,svg}'
];

exports.images = [
    './src/images/**/*.{png,jpg,ico,svg}'
];

exports.urls = [
    './src/scripts/urls.json'
];

exports.mocks = [
    './mocks/**/*.json'
];

exports.templates = [
    './src/templates/**/*.hbs'
];

exports.partials = [
    './src/templates/**/_*.hbs'
];
