var React = require('react');

var DefaultTemplate = React.createClass({
  getInitialState: function() {
    return this.props; //pulled from src/index.html
  },
  componentDidMount: function() {
    history.replaceState(this.props, null, window.location.pathname);
    window.onpopstate = this.popstateHandler;
  },
  render: function() {
    return <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.contents}</p>
      <input/>
      <p><a href="/content/article2.html" onClick={this.clickHandler} >Then click me!</a></p>
    <div style={{display: "none"}} id="props" dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}}></div>
    <script src="bundle.js"></script>
    </div>
  },
  clickHandler: function(event) {
    //this demos a simple client side change
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', event.target.href.replace('/content/', '/json/'));
    xmlHttp.addEventListener('load', this.loadHandler)
    xmlHttp.send();
    return false;
  },
  loadHandler: function(event) {
    var newProps = JSON.parse(event.target.response);
    this.setState(newProps);
    history.pushState(newProps, null, newProps.path);
  },
  popstateHandler: function(event) {
    this.setState(event.state);
  }
});

module.exports = DefaultTemplate;
