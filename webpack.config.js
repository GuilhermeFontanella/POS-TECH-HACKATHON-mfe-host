const { shareAll, withModuleFederation } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederation({

    name: 'host',

    remotes: {
        "mfe-settings": "http://localhost:4173/assets/remoteEntry.js",
        "mfe-tasks": "http://localhost:4174/assets/remoteEntry.js",
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});
