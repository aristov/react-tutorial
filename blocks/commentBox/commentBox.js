modules.define('commentBox', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                this._laodDataFromServer();
                this.findBlockInside('commentForm').on('submit', function(e, data) {
                    $.ajax({
                        url: this.params.url,
                        dataType: 'json',
                        type: 'POST',
                        data: data,
                        success: this._onSuccess,
                        context: this
                    });
                }, this);
            }
        }
    },

    _laodDataFromServer: function() {
        $.ajax({
            url: this.params.url,
            dataType: 'json',
            success: this._onSuccess,
            context: this
        });
    },

    _onSuccess: function(data) {
        BEMDOM.replace(
            this.findBlockInside('commentList').domElem,
            BEMHTML.apply({
                block: 'commentList',
                data: data
            }));
    }

}));

});
