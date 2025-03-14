module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.md$/,
            use: 'raw-loader'
          }
        ]
      }
    }
  }
}; 