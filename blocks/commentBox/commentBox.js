modules.define('commentBox', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                this._loadDataFromServer();
                this.findBlockInside('commentForm').on('submit', this._onSubmit, this);
                setInterval(this._loadDataFromServer.bind(this), this.params.pollInterval);
            }
        }
    },

    _onSubmit: function(e, data) {
        $.ajax({
            url: this.params.url,
            dataType: 'json',
            type: 'POST',
            data: data,
            success: this._onSuccess,
            error: this._onError,
            context: this
        });
    },

    _loadDataFromServer: function() {
        $.ajax({
            url: this.params.url,
            dataType: 'json',
            success: this._onSuccess,
            error: this._onError,
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
    },

    _onError: function(xhr, status, err) {
        console.error(this.params.url, status, err.toString());
    }

}));

});
