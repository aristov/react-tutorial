modules.define('commentBox', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                this._data = [];
                this._loadDataFromServer();
                this.findBlockInside('commentForm').on('submit', this._onSubmit, this);
                setInterval(this._loadDataFromServer.bind(this), this.params.pollInterval);
            }
        }
    },

    _onSubmit: function(e, comment) {
        this._data.push(comment);
        this._updateList();
        $.ajax({
            url: this.params.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
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
        this._data = data;
        this._updateList();
    },

    _onError: function(xhr, status, err) {
        console.error(this.params.url, status, err.toString());
    },

    _updateList: function() {
        this.findBlockInside('commentList').update(this._data);
    }

}));

});
