const path = require('path');

module.exports = {
    entry: './scripts.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts.bundle.js'
    },
    mode:'production',
    devtool: 'source-map'
};