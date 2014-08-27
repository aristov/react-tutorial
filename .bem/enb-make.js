module.exports = function(config) {
    config.mode("development", function() {
        config.node("bundles/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/file-copy"), { sourceTarget: "?.css", destTarget: "_?.css" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.js", destTarget: "_?.js" } ]
            ]);
        });
    });
    config.mode("production", function() {
        config.node("bundles/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/borschik"), { sourceTarget: "?.css", destTarget: "_?.css", minify: true, freeze: false } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.js", destTarget: "_?.js", minify: true, freeze: false } ]
            ]);
        });
    });

    config.node("bundles/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemdecl.js" } ],
            [ require("enb-modules/techs/deps-with-modules"), { sourceSuffixes: ['js', 'jsx'] } ],
            require("enb/techs/files"),
            require("enb/techs/css"),
            [ require("./techs/jsx"), { target: '?.pre.js' } ],
            [ require("enb-modules/techs/prepend-modules"), { source: '?.pre.js', target: '?.js' } ],
            [ require("enb/techs/js"), { sourceSuffixes: 'node.js', target: '?.node.js' } ]
        ]);
        nodeConfig.addTargets(["_?.css", "_?.js", "?.node.js"]);

        function getLevels() {
            return [
                {"path":"libs/bem-core/common.blocks","check":false},
                {"path":"blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}