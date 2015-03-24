var React = require('react');

var DefaultTemplate = React.createClass({
  render: function() {
    return <article>
      <title>{this.props.title}</title>
      <h1>{this.props.title}</h1>
      <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
    </article>
  },
});

module.exports = DefaultTemplate;
