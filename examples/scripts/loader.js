var Entry = require('../templates/article.jsx');
var React = require('react');

// Isomorphic React renders twice. Once on the HTML page, once in JavaScript. If the props are the same on HTML and JavaScript, the template is synced, allowing subsequent updates without destroying user input: http://www.crmarsh.com/react-ssr/
React.renderComponent(Entry(props), document.querySelector('body')); //props is a global var that was written by server side React
