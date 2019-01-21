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
Description...
### Build
#### `npm run build`
Description...
### Deployment
#### `./scripts/deploy-s3.sh`
Description...

## Todo
* webpack-dev-server vs nodemon dev script
* s3 Sync Script
* content as json template structure
* eslint config
