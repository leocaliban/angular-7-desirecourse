var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngw = require('@ngtools/webpack');

module.exports = {
    entry: './src/app/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/,
                loaders: ['css-to-string-loader','css-loader']
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new ngw.AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};