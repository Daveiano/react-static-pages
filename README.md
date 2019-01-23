# React Static Pages
Template project structure for a ReactJS driven static HTML rendered website. JSX and SCSS is transpiled via webpack@4. A node script `generate-html` is used to generate a index.html with a redux store embed as json data.

## Features
* JSX/ES6 transpiling via babel@7
* SCSS transpiling via node-sass and postcss
* Basic React/Router/Redux Setup
* Bootstrap & ESLint
* Generating HTML with ejs and saving to file via NodeJS 

## Usage

### Development
#### `npm run dev`
* Cleans up the dist/ folder (where the assets will be saved)
* Copy static assets (e.g. manifest.json) to the dist/ folder
* Transpiles the source files to ES5 for NodeJS and watches for changes to retranspile
* Starting webpack-dev-server
* Start nodemon to regenerate the HTML when changes are made

### Build
#### `npm run build`
* Cleans up the dist/ folder (where the assets will be saved)
* Transpiles the source files to ES5 for NodeJS
* Webpack builds the bundle.js and style.css
* Node builds the HTML file from the transpiled source files
* Copy static assets (e.g. manifest.json) to the dist/ folder