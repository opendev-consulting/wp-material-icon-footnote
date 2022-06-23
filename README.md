# Material Footnote


## Descripton

Based on https://materialdesignicons.com


## Installation

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/material-footnote` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

## Screenshots

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

## Changelog

### 0.1.0 ###

* Release


## Develop

### When starting a new block

npm -g install @wordpress/env	
npx @wordpress/create-block starter-block
cd starter-block

You can run several commands inside:

  $ npm start
    Starts the build for development.

  $ npm run build
    Builds the code for production.

  $ npm run format
    Formats files.

  $ npm run lint:css
    Lints CSS files.

  $ npm run lint:js
    Lints JavaScript files.

  $ npm run plugin-zip
    Creates a zip file for a WordPress plugin.

  $ npm run packages-update
    Updates WordPress packages to the latest version.

### Building

wp-env start

`npm run build` for running once to create a “production” build

`npm run start` for creating a “development” build


