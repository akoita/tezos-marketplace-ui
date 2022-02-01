// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 enforce: "pre",
//                 use: ["source-map-loader"],
//             },
//         ],
//     },
//     ignoreWarnings: [/Failed to parse source map/],
//     resolve: {
//         fallback: {
//             "http": require.resolve("stream-http"),
//             "https": require.resolve("https-browserify"),
//             "crypto": require.resolve("crypto-browserify"),
//             "stream": require.resolve("stream-browserify"),
//             "path": require.resolve("path-browserify"),
//             "os": require.resolve("os-browserify/browser"),
//             "url": require.resolve("url/")
//         }
//     },
// };
//


const webpack = require('webpack');


module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer")
    }
    config.plugins.push(new webpack.ProvidePlugin({Buffer: ['buffer', 'Buffer']}))
    return config
}