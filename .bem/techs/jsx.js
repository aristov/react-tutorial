var fs = require('fs'),
    reactTools = require('react-tools');

module.exports = require('enb/lib/build-flow').create()
    .name('jsx')
    .target('target', '?.js')
    .useFileList(['js', 'jsx'])
    .builder(function (jsxFiles) {
        var jsx = jsxFiles.map(function(file) {
            return [
                '/* ' + file.name + ' (begin) */',
                fs.readFileSync(file.fullname, 'utf-8'),
                '/* ' + file.name + ' (end) */'
            ].join('\n');
        });
        return reactTools.transform(['/** @jsx React.DOM */'].concat(jsx).join('\n'));
    })
    .createTech();