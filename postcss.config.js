const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const tailwindCSS = require('tailwindcss')

const minimize = true

module.exports = {
  plugins: [
    autoprefixer,
    postcssNested,
    postcssImport,
    tailwindCSS(),
    minimize &&
      cssnano({
        preset: ['default', {discardComments: {removeAll: true}}]
      })
  ].filter(Boolean)
}
