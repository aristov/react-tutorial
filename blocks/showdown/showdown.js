modules.define('showdown', ['loader_type_js'], function(provide, loader) {

loader('http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js', function() {
    provide(Showdown);
});

});