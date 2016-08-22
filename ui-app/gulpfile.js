/**
 * Tasks dependencies
 */
var gulp = require('gulp');
var bundles = require('./config/bundles');
var paths = require('./config/paths');

/**
 * Tasks modules
 */
var build = require('ui-gulp_tasks/tasks/build.spa');
var dist = require('ui-gulp_tasks/tasks/dist.spa');
var deploySwift = require('ui-gulp_tasks/tasks/deploy.swift');
var deployGHpages = require('ui-gulp_tasks/tasks/deploy.ghpages');

/**
 * Register tasks
 */
build(gulp, paths, bundles,{
    'namespace':'App.Example.templates'
});

dist(gulp, paths, bundles);

deploySwift(gulp, paths, bundles, {
    'department': '[DEPARTMENT]',
    'user': '[USER]',
    'password': '[PASSWORD]',
    'container': '[CONTAINER]',
    'verbose': true
});

deployGHpages(gulp, paths);
