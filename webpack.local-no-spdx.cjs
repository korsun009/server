/**
 * Local production build helper for a dependency-free Files Sharing patch.
 * The packaged v33.0.6 license assets remain unchanged because this patch adds
 * no dependency and therefore no new third-party licensing material.
 */
const config = require('./webpack.config.js')

config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'WebpackSPDXPlugin')

module.exports = config
