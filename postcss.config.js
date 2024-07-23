module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other configurations
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};

