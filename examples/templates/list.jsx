var React = require('react');

var DefaultTemplate = React.createClass({
  render: function() {
    return <div>
      <title>{this.props.title}</title>
      <h1>{this.props.title}</h1>
      <div dangerouslySetInnerHTML={{__html: this.props.contents}} />
      <ul>
        {this.props.articles.map(function(value, index, array) {
          return <li><a href={value.url}>{value.title}</a></li>
        })}
      </ul>
    </div>
  }
});

module.exports = DefaultTemplate;
