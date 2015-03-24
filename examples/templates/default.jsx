var React = require('react');
var Article = require('./article.jsx');
var List = require('./list.jsx');

var DefaultTemplate = React.createClass({
  getInitialState: function() {
    return this.props;
  },
  componentDidMount: function() {
    history.replaceState(this.state, null, window.location.pathname);
    window.onpopstate = this.popstateHandler;
    document.addEventListener('click', this.clickHandler);
  },
  render: function() {
    var Component = require('./' + this.state.template);
    return <div>
      <link rel="stylesheet" href="/main.css"/>
      <Component {...this.state} />
      <input/>
      <script dangerouslySetInnerHTML={{__html: "props = " + JSON.stringify(this.state)}}></script>
      <script src="bundle.js"></script>
    </div>
  },
  clickHandler: function(event) {
    if (event.target.href && event.target.href.search(new RegExp("^" + window.location.origin)) === 0) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', event.target.href.replace('.html', '.json'));
      xmlHttp.addEventListener('load', this.loadHandler.bind(this, event.target.href))
      xmlHttp.addEventListener('error', this.errorHandler.bind(this, event.target.href))
      xmlHttp.send();
      event.preventDefault();
      return false;
    }
  },
  errorHandler: function(url, event) {
    window.location = url;
  },
  loadHandler: function(url, event) {
    try {
      var newProps = JSON.parse(event.target.response);
    } catch(err) {
      window.location = url;
      return;
    }
    this.setState(newProps);
    history.pushState(newProps, null, newProps.path);
  },
  popstateHandler: function(event) {
    this.setState(event.state);
  }
});

module.exports = DefaultTemplate;
