# Frontend in the new age

**Disclaimer**: This guide is more of an opinionated approach, all content
written here is without any commercial interest nor intention to dismiss other
approaches

## Brief history of the web frontend

The first era of frontend web development was made up of font and nested table
tags, which lasted until about the early of 2000s. The web was very ugly and
frontend development was a mess as browsers from different companies are waging
wars to gain market shares by having their own implementation without any mutual
standards.

The second era of frontend development was basic CSS and IE6. Then Microsoft
introduced Ajax (Asynchronous Javascript and XML) API in their IE6. Ajax
applications started gaining traction when Firefox implemented their own (but
similar) version of Ajax API. Ajax really took off when Google used this
technology to build their key products Gmail and Google Maps. At this moment,
everyone was literally screaming "I want my ajax app". Riding on this hype
train, JQuery rises in the mid 2000s by making it easy to build ajax cross
platforms applications. As a result, Javascript is not a "toy" language to "move
stuffs around" anymore, it's started to be actively used in development by most
of web developers.

This gives rises to the third era, namely "Single Page Application". Since now
communications can be made via ajax request in the background, it would be
convenient and efficient to cache all the frontend assets and logic upon first
load of the application, hence reduce the job of backend server to solely
serving data (which in turn give rise to
[Service Oriented Architecture](https://en.wikipedia.org/wiki/Microservices) but
we will not discuss here). The side effect of this new way of doing frontend is
the "Framework War". Because Javascript is such a hard and disorganised language
to work with, people, research labs, corporates have been pouring effort into
developing thousands of frameworks like [Angular](https://angular.io),
[Ember](https://www.emberjs.com), [Knockout](http://knockoutjs.com/), etc. And
it has been going on for years without a clear winner.

## Why React

In recent years, a frontend library by [Facebook](https://facebook.com) has
emerged as one of the most popular go-to options for frontend developers, with
its innovative Shadow DOM algorithm and philosophy "do one thing and do it well"
(which make it very light as it only handled the view and leave other parts to
be handled by other libraries in the ecosystem). This is
[ReactJS](https://reactjs.org). Another advantage of React is that, unlike other
frameworks which develop their own syntax and notations (i.e. Angular, VueJS),
developers using React will be writing true Javascript, no nonsense.

## What about other aspect of our Contikey frontend application?

For data management, we are using [Redux](https://redux.js.org/). Redux is a
library that helps you manage your app’s state. It derives from various things,
one of them the
[Flux architecture](https://facebook.github.io/flux/docs/in-depth-overview.html#content).
Redux forces you to use pure functions to calculate the new state whenever an
action happens, so: `(oldState, action) => newState`. As a result, data
integrity and consistency is managed in our frontend application.

For routing purposes (**note**: "routing" here is pure frontend using
[HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History),
to give a better user experience, rather than having anything to do with the
backend), we are using [React-Router](https://reacttraining.com/react-router/)

## Build tools and configuration

Here comes the most important part of this write-up, as it is a "Frontend Setup
guide". We use [Webpack](https://webpack.js.org) with a bunch of module loaders
like [Babel](https://babeljs.io/),
[file-loader](https://github.com/webpack-contrib/file-loader).

### What is Webpack

Webpack is an open-source JavaScript module bundler. Webpack takes modules with
dependencies and generates static assets representing those modules.

### Why Webpack

The frontend have evolved into a humungous and complicated beast that now your
typical frontend guy's job is not simply hacking HTML, CSS, and a bit of JS
together to produce something to display the page rendered from server nicely
anymore. Doing frontend in 2017 is like riding a lion, and webpack is like your
girth. There are multiple other module bundlers on the market (namely
[Browserify](http://browserify.org/), etc) but none offers as great features as
Webpack does.

* Webpack creates the same build bundles in development and production for
  consistency
* Webpack can control multiple application entry points or sections, and
  provides common bundles among them. Other unique bundles for each section can
  be loaded on-demand.
* Webpack can version assets per file — for example, appending a unique hash to
  the file name (i.e. bundle.sd2fdds34.js). This makes it easy to cache the
  assets.
* Webpack supports live updates (hot module replacement) during development.
* Webpack is backed by a huge community of supporters who put in a lot of effort
  to extends Webpack with [loaders](https://webpack.js.org/concepts/loaders/)
  and [plugins](https://webpack.js.org/concepts/plugins/), making it easier,
  more streamlined and efficient to develop frontend applications.

### Webpack configurations

All configurations are encapsulated in 2 files (Isn't that amazing?),
[one](contikey-frontend/webpack.config.dev.js) for development, and
[the other](contikey-frontend/webpack.config.prod.js) for production build.

Let's start with the headers of both config files:

```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve('src');
const DIST_DIR = path.resolve('dist');
```

Here we are pulling in our dependencies, `path` is a module that helps us
manipulate file paths, `webpack` is (of course) the webpack module and
`HtmlWebpackPlugin` is a plugin that helps us generate the html file that will
be serve by our CDN (in production) and `webpack-dev-server` (in development).
`SRC_DIR` is the source directory of our application and `DIST_DIR` is where our
bundle (output) will be generated under.

```js
// excerpt from dev config
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  devServer: {
    inline: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
```

```js
// excerpt from production config
module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle-[hash].js',
    publicPath: '/',
  },
```

This part is the start of the actual config.

The first property is `devtool`, which is set to `source-map`. More info about
it [here](https://webpack.js.org/configuration/devtool/)

The `resolve` property is to specify how modules are resolved. webpack provides
reasonable defaults, but it is possible to change the resolving in detail. More
information about it [here](https://webpack.js.org/configuration/resolve/)

In the entry property, the entry files are defined, in this case `src/index.jsx`
and `babel-polyfill` (a module that is used to enable the async/await feature
that is not yet implemented in all browsers but is being considered to be added
to [ECMA Standard](https://en.wikipedia.org/wiki/Ecma_International)).

`devSever` property is catered specifically for `webpack-dev-server` which
indentify all the settings for the dev server to run on your local. More
information about webpack-dev-server
[here](https://webpack.js.org/configuration/dev-server/)

`output`, as the name suggested, is where you want the output file to go. In our
case, it is `dist/` folder. The name of the Javascript bundle can be configured
to be given dinamically (i.e. adding a hash at the end for the production
bundle).

```js
// excerpt from dev config
plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: 'index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BASE_URL: JSON.stringify('http://127.0.0.1:8000'), // change to whatever port that you are using to host backend at your local, must be different from 3000
      },
    }),
  ],
```

```js
// excerpt from production config
plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BASE_URL: JSON.stringify('http://api.contikey.com'),
      },
    }),
  ],
```

This part of the config files specify which plugins to use. `plugins` are
modules that can be created by anyone which can tap into webpack's build
process. Without them, webpack will lose 50% of its power, and this is where the
community can make their mark.

`HtmlWebpackPlugin`: this plugins handles the creations of HTML files for you.
the plugin will generate HTML5 file that automatically includes **all your
webpack bundles** in the body using script tags. It will take a template file as
an input, which is located at `src/index.html` and out put to `dist/` folder.
Why is this useful? Because you don’t need to write the script tags yourself.
Any dependency that your html needs to have is going to be added by this plugin.
It’s also useful for when we make use of generated filenames that include a hash
which changes in every build. This is used for busting the client’s browser
cache. Without this plugin we would have to manually enter the new hash into the
HTML for each build.

`OccurenceOrderPlugin`: this plugin sssign the module and chunk ids by
occurrence count. Ids that are used often get lower (shorter) ids. This make ids
predictable reduces total file size and is recommended.

`HotModuleReplacementPlugin`: this plugin gives you the ability to change code,
save it, and see the change appear almost instantly in your browser, without
having to reload it. Best of all, it keeps your app’s state as it was before the
change, so no need to reproduce all the steps.

`NoEmitOnErrorsPlugin`: this plugin is used to skip the emitting phase whenever
there are errors while compiling. This ensures that no assets are emitted that
include errors.

`DefinePlugin`: this plugin is used to configure enviroment variables (which is
not available in frontend development without module bundlers) so developers can
separate their config or even logic accordingly (Interestingly, React loader
will take in this `NODE_ENV` env variable to output different bundle i.e. a more
optimized one for production build). In here we only have a `BASE_URL` env
variable to indetify where we want to send our requests depends on the
environments.

`UglifyJsPlugin`: this plugin is used to minify your bundle, reducing its size
and browser parsing time.

```js
// excerpt from dev config
module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          { loader: 'react-hot-loader/webpack' },
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```

```js
// excerpt from prod config
module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```

Loaders are what basically replace other task runners like
[Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/). They allow you to
bundle any static resource way beyond JavaScript. You can easily write your own
loaders using Node.js.

Inside each loader's config, the `test` field specify which files (with matching
names) will be passed through this loader. There are extra config fields like
`include` (includes files from folders) or `exclude` (exclude files from
folders) or `query` (specific settings of the loader). More information about
loaders [here](https://webpack.js.org/loaders/)

### Diving in contikey project

I have include a TLDR guide to get up to pace in contributing to this project
[here](README.md)
