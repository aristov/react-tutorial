modules.define('commentList', ['i-bem__dom', 'BEMHTML', 'showdown'], function(provide, BEMDOM, BEMHTML, Showdown) {

var converter = new Showdown.converter();

provide(BEMDOM.decl(this.name, {

    update: function(data) {
        BEMDOM.replace(this.domElem, this._makeHtml(data));
    },

    _makeHtml: function(data) {
        data.forEach(function(comment) {
            comment.text = converter.makeHtml(comment.text);
        });
        return BEMHTML.apply({
            block: 'commentList',
            data: data
        });
    }

}));

});