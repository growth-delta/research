Frontend build files are located in this folder, to build the bundles set up the frontend, as per the documentation and run: npm run dev.

To modify the frontend files, edit the js & jsx files located in assets/JavaScript/ once the files are modified you must re-build the frontend, so you dont have to re-build each time it's a good idea to have the npm run dev, constantly watching for changes in the designated webpack build entry files:

entry: {
    site: './frontend/jsj/site.js',

},  // input file

Add new build files to the entry: in webpack.config.js this will add a new bundle file
