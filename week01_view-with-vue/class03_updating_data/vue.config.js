/* eslint-env node */
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins:
          [
            require('autoprefixer')(),
            require('postcss-nested')(),
            require('postcss-simple-vars')()
          ],
      } 
    }
  }
};

// npm -i postcss-cli postcss-loader postcss-nested postcss-simple-vars
