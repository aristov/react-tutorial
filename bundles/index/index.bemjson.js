({
    block: 'page',
    styles: [{ elem: 'css', url: 'index.css' }],
    scripts: [
        { elem: 'js' , url: 'index.js' },
        { elem: 'js' , url: 'index.bemhtml.js' }
    ],
    title: 'Hello BEM!',
    content: {
        block: 'commentBox',
        js: {
            url: 'comments.json',
            pollInterval: 2000
        }
    }
})