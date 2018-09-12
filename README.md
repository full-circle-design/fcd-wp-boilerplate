# A boilerplate WP theme for awesomizing devops at FCD.


## Get started

This base theme relies on gulp and gulp related dependencies.

Make sure you have [NPM](https://www.npmjs.com/) installed, then run

```
npm install --save-dev
```
And all should be good.


## Gulp

Step 1. Run:

```
gulp watch
```

Step 3. Prosper.

(the watch test is configured for endless streaming, so it will monitor any changes and compile as needed.)


## If you really need more

Run tasks individually.

Compile all that sassy goodness into a bundle.css file:

```
gulp sass
```

Concatenate and minify js into a (you guessed it) bundle.js file:

```
gulp scripts
```

## Output

All filed will be output into the /dist/ directory.
(dist is ignored in this repository since compiled code should not be committed.)
