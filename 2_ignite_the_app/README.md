# Igniting the App

## 1. Initialize the app

- We can initialize the app using `npm init -y`
- The -y option doesn’t prompt the user to add info about the app and creates it using default params.
- This creates a package.json file that contains meta-information about your project like package names, versioning info, what the package is about, dependencies and devDependencies of the package, how to set it up and more. npm creates a configuration and it is stored in package.json.

## 2. Adding packages: react and react-dom

- In order to inject scripts for react and react-dom, we used to add script tags in HTML.
- Now we can add packages for these scripts to make it more modular
- `npm i react react-dom`
- With this `react and react-dom` get added to dependencies in package.json
- Along with these packages, transitive dependencies also get installed
- This now creates:
	- **package-lock.json**: With this, the versions of all your packages and their dependencies are locked. This means when you run npm install on other machines, npm checks this file to install the exact versions of the dependencies. If this file is absent, npm would then work with the caret symbol
	- **node_modules**: node_modules stores the source code of all the downloaded packages for dependencies and dev-dependencies needed for your app

## 3. Build for production: Ignite the app

- Before we ship to prod, we need to minify our files using a bundler like webpack, parcel, etc.
- **Bundler**: 
	- A bundler is a tool that puts together all your code, images, packages, and their dependencies in order to ship it to production so that the application can be served easily. These files have everything merged and ready for the web, commonly known as the bundle file.
	- A bundler also minifies the files for performance improvements while shipping to production. When we write code we also include indentations, comments, warnings, logs, docs, tests, etc but we don’t need all of this in the bundle file.
- We install parcel as a devDependency: `npm i -D parcel`
- Now to ignite our app, we can start the development server by giving parcel the root or entry point of our app using:
	- **npx**: Since parcel is not installed globally we can use npx to execute the command to start the build and spin up dev server: `npx parcel src/index.html`
	- **using scripts**: Or we can write scripts in package.json for different commands:
		- "start": "parcel src/index.html"
		- test: to run unit tests
		- We can run these commands using `npm run <command_name>` eg: npm run start
- On a successful build, it adds:
	- **.parcel-cache**: .parcel-cache updates stores information about your project when parcel builds it, so that, when it rebuilds, it doesn’t have to reparse and re-analyze everything from scratch.
	- **dist**: Dist means distributable. This folder contains the minified, production-ready compiled version of our source code under the src folder. When we run the command for the build, parcel runs all its optimizations on the codebase for production and generates minified, optimized code ready for distribution.
- Build a production version of your app using `parcel build src/index.html`
- **Browserslist**: Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. You can provide queries for both prod as well as dev mode.