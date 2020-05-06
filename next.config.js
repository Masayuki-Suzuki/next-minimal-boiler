const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = withTypescript(
    withSass({
        webpack(config, options) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '~': './src'
            }

            if (options.isServer) {
                config.plugins.push(new ForkTsCheckerWebpackPlugin())
            }

            return config
        }
    })
)
