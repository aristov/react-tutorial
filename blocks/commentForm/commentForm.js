modules.define('commentForm', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                this.bindTo('submit', function(e) {
                    e.preventDefault();
                    this.emit('submit', {
                        author: this.elem('author').val(),
                        text: this.elem('text').val()
                    });
                    this.elem('author').val('');
                    this.elem('text').val('');
                });
            }
        }
    }

}))

});
