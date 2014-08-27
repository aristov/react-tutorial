modules.define('commentForm', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                this.bindTo('submit', this._onSubmit);
            }
        }
    },

    _onSubmit: function(e) {
        e.preventDefault();

        var author = this.elem('author').val().trim(),
            text = this.elem('text').val().trim();

        if (author && text) {
            this.emit('submit', { author: author, text: text });
            this.elem('author').val('');
            this.elem('text').val('');
        }
    }

}))

});
