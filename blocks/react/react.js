modules.define('react', ['loader_type_js'], function(provide, loader) {

loader('http://fb.me/react-0.10.0.js', function() {
    provide(React);
    delete window.React;
});

});