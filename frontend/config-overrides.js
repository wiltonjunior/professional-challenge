const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@js': path.resolve(__dirname, 'src/assets/js'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@i18n': path.resolve(__dirname, 'src/i18n'),
    '@configs': path.resolve(__dirname, 'src/configs'),
    '@scss': path.resolve(__dirname, 'src/assets/scss'),
    '@images': path.resolve(__dirname, 'src/assets/images'),
    '@theme': path.resolve(__dirname, 'src/app/theme'),
    '@pages': path.resolve(__dirname, 'src/app/pages'),
    '@routes': path.resolve(__dirname, 'src/app/routes'),
    '@shared': path.resolve(__dirname, 'src/app/shared'),
    '@utils': path.resolve(__dirname, 'src/app/shared/utils'),
    '@UI': path.resolve(__dirname, 'src/app/shared/components/UI'),
    '@components': path.resolve(__dirname, 'src/app/shared/components'),
    '@contexts': path.resolve(__dirname, 'src/app/shared/contexts'),
  })
)
