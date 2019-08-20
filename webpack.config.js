let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports ={
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer:{
		overlay: true
	},
	 module: {
    rules: [
    	{
	   	   	test: /\.js$/,
	   	   	loader: 'babel-loader',
	   	   	//exclude: '/node_modules/'
	   },
	   {
        test: /\.less$/,
        use: ['style-loader','css-loader',"less-loader"]
      },
      /*{
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }*/
    ]
  },
  /*plugins: [
    new ExtractTextPlugin('style.css')
  ]*/
};





