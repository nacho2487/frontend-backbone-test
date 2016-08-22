var merge = require('deepmerge');

/**
 * Files
 */
var shared = require('./resources/shared.resources');
var small = require('./resources/small.resources');
var large = require('./resources/large.resources');

/**
 * Bundles
 */
exports.scripts = {
    'bundle__small': merge(shared.scripts, small.scripts),
    'bundle__large': merge(shared.scripts, large.scripts)
};

exports.styles = {
    'bundle__small': merge(shared.styles, small.styles),
    'bundle__large': merge(shared.styles, large.styles)
};

exports.fonts = {
    'resources__small': merge(shared.fonts, small.fonts),
    'resources__large': merge(shared.fonts, large.fonts)
};

exports.images = {
    'resources__small': merge(shared.images, small.images),
    'resources__large': merge(shared.images, large.images)
};

exports.urls = {
    'resources': shared.urls
};

exports.mocks = {
    'resources__small': merge(shared.mocks, small.mocks),
    'resources__large': merge(shared.mocks, large.mocks)
};

exports.templates = {
    'templates__small': merge(shared.templates, small.templates),
    'templates__large': merge(shared.templates, large.templates),
    'all-the-templates': merge(shared.templates, small.templates, large.templates)
};
