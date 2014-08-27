({
    block: 'page',
    styles: [{ elem: 'css', url: 'bem.css' }],
    scripts: [
        { elem: 'js' , url: 'bem.js' },
        { elem: 'js' , url: 'bem.bemhtml.js' }
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