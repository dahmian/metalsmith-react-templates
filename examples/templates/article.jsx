var React = require('react');

var DefaultTemplate = React.createClass({
  render: function() {
    return <div>
      <title>{this.props.title}</title>
      <h1>{this.props.title}</h1>
      <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
    </div>
  },
});

module.exports = DefaultTemplate;
