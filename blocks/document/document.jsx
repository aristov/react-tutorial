modules.require(['react', 'commentBox'], function(React, CommentBox) {

React.renderComponent(
    <CommentBox url="comments.json" pollInterval={2000} />,
    document.getElementById('content')
);

});
