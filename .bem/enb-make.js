module.exports = function(config) {

    config.node("bundles/index", function(nodeConfig) {
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
            [ require("enb/techs/js"), { sourceSuffixes: ['node.js'], target: '?.node.js' } ],
            require("enb/techs/css")
        ]);
        nodeConfig.addTargets(["?.node.js", "?.html", "?.js", "?.css"]);

        function getLevels() {
            return [
                {"path":"blocks","check":true},
                {"path":"libs/bem-core/common.blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}