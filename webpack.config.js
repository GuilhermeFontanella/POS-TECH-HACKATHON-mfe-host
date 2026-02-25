const { shareAll, withModuleFederation } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederation({

    name: 'host',

    remotes: {
        "mfe-settings": "http://localhost:4173/assets/remoteEntry.js",
        // Adicione seus remotes aqui
        // "mfe1": "http://localhost:3000/remoteEntry.js",
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});
