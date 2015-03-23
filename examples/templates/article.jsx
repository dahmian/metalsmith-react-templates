var React = require('react');

var DefaultTemplate = React.createClass({
  getInitialState: function() {
    return this.props; //pulled from src/index.html
  },
  componentDidMount: function() {
    history.replaceState(this.props, null, window.location.pathname);
    window.onpopstate = this.popstateHandler;
    document.addEventListener('click', this.clickHandler);
  },
  render: function() {
    return <div>
        <title>{this.state.title}</title>
      <h1>{this.state.title}</h1>
      <div dangerouslySetInnerHTML={{__html: this.state.contents}}></div>
      <input/>
      <script dangerouslySetInnerHTML={{__html: "props = " + JSON.stringify(this.props)}}></script>
      <script src="bundle.js"></script>
    </div>
  },
  clickHandler: function(event) {
    if (event.target.href) {
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
