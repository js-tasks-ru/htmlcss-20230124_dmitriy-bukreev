module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-extend'),
    require('autoprefixer'),
    // require('cssnano'),
  ],
};
