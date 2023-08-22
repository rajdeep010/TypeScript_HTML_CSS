# TypeScript_HTML_CSS

1. Install parcel as a dev dependency.
2. Create the tsconfig file using command : tsc -init
3. Go to tsconfig file and search for noEmitOnError, uncomment that. (It says that, if there is any error in ts file then it won't create the corresponding js file)
4. Now go to the package.json file, and remove:   "main": "index.js",
5. Then add a script:     "start": "(npx parcel ./index.html) & npm parcel watch ./index.html"
6. This will start our development server and as well as whatever changes we will perform on the ts file corresponding changes will be reflected on the js file.

