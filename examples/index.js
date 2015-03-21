var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates  = require('metalsmith-templates');
var reactTemplate = require('metalsmith-react-templates');
var browserify = require('metalsmith-browserify');
var reactify = require('reactify');
var path = require('metalsmith-path');

Metalsmith(__dirname)
  .clean(true)
  .use(path())
  .use(reactTemplate({
    directory: 'templates',
    nonStatic: true
  })) 
  .use(browserify({
    files: ['../scripts/loader.js'],
    dest: 'bundle.js',
    transforms: [reactify]
  })) 
  .destination('./content')
  .build(function(err) {
    if (err) throw err;
  }) 

Metalsmith(__dirname)
  .clean(true)
  .use(path())
  .use(templates({
    engine: 'ejs',
    default: 'json.template'
  }))
  .destination('./json')
  .build(function(err) {
    if (err) throw err;
  }) 
