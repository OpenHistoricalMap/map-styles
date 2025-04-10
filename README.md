## OpenHistoricalMap styles

This repository contains vector map styles that can be applied to OpenHistoricalMap vector tiles. There are a number of uses for these styles but common to them is the OpenHistoricalMap vector tile source: https://vtiles.openhistoricalmap.org/.

### CDN usage with MapLibre GL JS
The [MapLibre GL JS quickstart](https://maplibre.org/maplibre-gl-js/docs/) has you create an html file containing:

```html
<html>
<head>
  <script src="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js"></script>
  <link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
</head>
<body>
<div id="map" style="width:100%;height:100%"></div>
<script>
  var map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
  });
</script>

</body>
</html>
```

To use one of the OpenHistoricalMap styles simply replace the style URL, `https://demotiles.maplibre.org/style.json` with one of ours:

| Style | URL |
| --- | --- |
| historical | https://unpkg.com/@openhistoricalmap/map-styles@latest/dist/historical/historical.json |
| japanese_scroll | https://unpkg.com/@openhistoricalmap/map-styles@latest/dist/japanese_scroll/japanese_scroll.json |
| railway | https://unpkg.com/@openhistoricalmap/map-styles@latest/dist/railway/railway.json |
| woodblock | https://unpkg.com/@openhistoricalmap/map-styles@latest/dist/woodblock/woodblock.json |

Instead of specifying `latest` you can also pin your style to a particular version, e.g., `0.9.6`


### Style development using Maputnik

We use the hosted version of the [Maputnik visual editor](https://maputnik.github.io/editor/) for style development although a local installation should work equally well. The recommended way to work with Maputnik is to:

1. clone this repo to your computer or [download the latest release](https://github.com/OpenHistoricalMap/map-styles/releases).
   `git clone git@github.com:OpenHistoricalMap/map-styles.git`
2. run `npm install` from the root directory.
3. run `npm run start` in the root directory; this will start the lightweight Node `http-server` and open a new tab or window in your browser. Everything except for the OHM vector tile sources (style files, glyphs, sprites) will be running locally on port 8888.
4. open the style file you wish to work on in Maputnik.; it will be `historical/historical.json` or an equivalent path for a different style.
5. if you're submitting changes to OpenHistoricalMap please begin by creating an issue that describes them at our [issues repository](https://github.com/OpenHistoricalMap/issues/), which is different from [where you'd submit your pull request](https://github.com/OpenHistoricalMap/map-styles).
6. when you're satisfied with your local changes, repopulate the `dist` directory by running `npm run build`; the build step replaces references to `localhost` with the production values of the OpenHistoricalMap servers for `glyph` and `sprite` serving; you may need to edit these for your own custom use.
7. use `control-c` to end the browser session you started with `npm run start`.


Miscellaneous notes:

* we use [`nvm`](https://github.com/nvm-sh/nvm) and provide an `.nvmrc` file. If you use it, remember to begin your development with `nvm use`.
* although this repository contains glyphs for many fonts, the `build` step only packages the styles in use across all styles.
* If you're creating a new style, please follow our naming conventions where, for a _new_style_, the expected file hierarchy is:
  ```
  /new_style/new_style.json
  /new_style/new_style_spritesheet.json
  /new_style/new_style_spritesheet.png
  /new_style/new_style_spritesheet@2x.json
  /new_style/new_style_spritesheet@2x.png
  ```
* the OpenHistoricalMap `timeslider` is not yet incorporated; it, too, is being readied for npm packaging.
* we recognize that it would be better if the local port number were configurable at the command line.


## Versioning and publishing to npm

* increment the version in `package.json`, e.g., `0.9.7`
* [create a corresponding release on GitHub](https://github.com/OpenHistoricalMap/map-styles/releases/new), e.g., `v0.9.7`
* publish to npm using `npm publish`
* rebuild the OHM properties that depend on `map-styles`, making sure the latest version of the module has been pulled.

### ohm-website

* ensure your local `staging` branch of `ohm-website` is current using `git pull`
* create a release branch from `staging`, e.g., `git checkout -b map-styles-0.9.7`
* log in to the Docker container and start a bash shell
* run `yarn upgrade` and verify, using the output, that the correct version has been installed
  ```
  Rebuilding all packages...
  success Saved lockfile.
  success Saved 159 new dependencies.
  info Direct dependencies
  ├─ @mapbox/mapbox-gl-rtl-text@0.2.3
  ├─ @maplibre/maplibre-gl-leaflet@0.0.20
  ├─ @openhistoricalmap/map-styles@0.9.7
  …
  ```
* from your IDE/host computer, commit `yarn.lock` and push your branch to GitHub
* open a pull request against `OpenHistoricalMap/ohm-website`'s `staging` branch
* confirm that the only changed file is `yarn.lock` & merge to staging
* pull the updated `staging branch` to get the merge commit
* ensure your local `staging` branch of `ohm-deploy` is current using `git pull`
* create a release branch from `staging`, e.g., `git checkout -b map-styles-0.9.7`
* in `images/web/Dockerfile` update `OPENHISTORICALMAP_WEBSITE_GITSHA` & the reason string in the subsequent `RUN echo`
* commit the `Dockerfile` and push your branch to GitHub
* open a pull request against `OpenHistoricalMap/ohm-deploy`'s `staging` branch
* confirm your changed files & merge to staging
* monitor the build output


## Review styles while they are in staging

To review the styles with the latest updates to the map-styles repo before they are live, use the below links. These are pulled from the `staging` branch. The `staging` branch will reflect 1) recently made updates before they are merged into `main` and occasionally 2) iterative cartography testing. 

To see a specific year in history, change the target year in the URL:
- Main/Historical: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=O_staging
- Rail style: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=R_staging
- Woodblock: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=W_staging
- Japanese Scroll: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=J_staging
