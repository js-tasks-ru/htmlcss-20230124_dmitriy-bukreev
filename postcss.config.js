module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('postcss-import'),
    require('@csstools/postcss-sass'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
