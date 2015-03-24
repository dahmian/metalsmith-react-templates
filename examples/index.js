var Metalsmith = require('metalsmith');
var templates  = require('metalsmith-templates');
var reactTemplate = require('metalsmith-react-templates');
var browserify = require('metalsmith-browserify');
var reactify = require('reactify');
var path = require('metalsmith-path');
var json = require('metalsmith-json-generator');
var markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
  .clean(true)
  .use(markdown())
  .use(path())
  .use(json())
  .use(reactTemplate({
    directory: 'templates',
    nonStatic: true,
    pattern: '*html'
  })) 
  .use(browserify({
    files: ['../scripts/loader.js'],
    dest: 'bundle.js',
    transforms: [reactify]
  })) 
  .destination('./build')
  .build(function(err) {
    if (err) throw err;
  }) 
