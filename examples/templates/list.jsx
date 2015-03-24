var React = require('react');

var DefaultTemplate = React.createClass({
  render: function() {
    return <div>
      <title>{this.props.title}</title>
      <h1>{this.props.title}</h1>
      <ul>
        {this.props.collections.articles.map(function(element) {
          return <li key={element.path}><a href={element.path}>{element.title}</a></li>
        })}
      </ul>
    </div>
  }
});

module.exports = DefaultTemplate;
