modules.define('comment', ['react', 'showdown'], function(provide, React, Showdown) {

var converter = new Showdown.converter();

var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="comment__author">
          {this.props.author}
        </h2>
        <span className="comment__text" dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

provide(Comment);

});