var React = require('react');

var DefaultTemplate = React.createClass({
  getInitialState: function() {
    return this.props; //pulled from src/index.html
  },
  render: function() {
    return <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.contents}</p>
      <input/>
      <p onClick={this.clickHandler} >Then click me!</p>
    <div style={{display: "none"}} id="props" dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}}></div>
    <script src="bundle.js"></script>
    </div>
  },
  clickHandler: function() {
    //this demos a simple client side change
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', '../json/article2.html');
    xmlHttp.addEventListener('load', this.loadHandler)
    xmlHttp.send();
  },
  loadHandler: function(event) {
    var props = JSON.parse(event.target.response);
    this.setState(props);
  }
});

module.exports = DefaultTemplate;
