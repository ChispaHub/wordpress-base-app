Wordpress Base App
=======

Starting structure to develop projects with Wordpress.

## Requirements

* [Composer](https://getcomposer.org/)
* [node](https://nodejs.org/)

## Setup

Clone repository and then within the root directory:

```shell
$ composer install
$ npm install
```

Copy wp-config-sample.php file to wp-config.php change `WP_SITEURL` and `WP_HOME` variables and the database credentials:

```shell
$ cp wp-config-sample.php wp-config.php
$ vi wp-config.php
```

Change `AssetDir` variable in webpack.config.js for your assets directory. 

## App structure

Unlike most wordpress projects this one has the theme folder separated from the wordpress folder. You will find languages, uploads, theme, upgrades and plugins inside the "app" folder.


## Documentation

This app depends on various projects, if you are having some troubles read the project's docs and if you can't solve it [leave an issue](https://github.com/chispahub/wordpress-base-app/issues).

* [Composer](https://getcomposer.org/): used to handle the php dependencies.
* [NPM](https://www.npmjs.com/): the package manager for JavaScript.
* [webpack](https://webpack.js.org/): used to compile frontend assets.
* [Babel](https://babeljs.io/): ECMAScript 6 to ECMAScript 5 compiler.
* [Wordpress](https://wordpress.org/): the core of this app.