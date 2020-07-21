const path = require('path')
const Dotenv = require('dotenv-webpack')

const ENV = process.env.NODE_ENV

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins[
        webpackConfig.plugins.length - 1
      ].tsconfig = path.resolve(__dirname, 'tsconfig.cgen.json')

      webpackConfig.plugins.push(
        new Dotenv({
          path: !ENV ? './env/.env.development' : `./env/.env.${ENV}`,
        }),
      )

      return webpackConfig
    },
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      Assets: path.resolve(__dirname, './src/assets'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@app(.*)$': '<rootDir>/src$1',
      },
    },
  },
}
