module.exports = function(config) {
    function getLevels() {
        return [
            {"path":"blocks","check":true},
            {"path":"libs/bem-core/common.blocks","check":true}
        ].map(function(l) { return config.resolvePath(l); });
    }

    config.node("bundles/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemdecl.js" } ],
            [ require("enb-modules/techs/deps-with-modules"), { sourceSuffixes: ['js', 'jsx']} ],
            require("enb/techs/files"),
            [ require("enb/techs/js"), { sourceSuffixes: 'node.js', target: '?.node.js' } ],
            [ require("enb/techs/js"), { target: '?.client.js' } ],
            require("./techs/jsx"),
            [ require("enb/techs/file-merge"), { sources: ['?.client.js', '?.jsx.js'], target: '?.pre.js' } ],
            [ require("enb-modules/techs/prepend-modules"), { source: '?.pre.js', target: '?.js' } ],
            require("enb/techs/css")
        ]);
        nodeConfig.addTargets(["?.node.js", "?.js", "?.css"]);
    });

    config.node("bundles/bem", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            require("enb/techs/bemdecl-from-bemjson"),
            [ require("enb-modules/techs/deps-with-modules"), {} ],
            require("enb/techs/files"),
            require("enb-bemxjst/techs/bemhtml"),
            require("enb/techs/html-from-bemjson"),
            [ require("enb-diverse-js/techs/browser-js"), { target: '?.pre.js' } ],
            [ require("enb-modules/techs/prepend-modules"), { source: '?.pre.js', target: '?.js' } ],
            [ require("enb-diverse-js/techs/node-js"), { target: '?.pre.node.js' } ],
            [ require("enb-modules/techs/prepend-modules"), { source: '?.pre.node.js', target: '?.node.js' } ],
            require("enb/techs/css")
        ]);
        nodeConfig.addTargets(["?.node.js", "?.html", "?.js", "?.css"]);
    });
}