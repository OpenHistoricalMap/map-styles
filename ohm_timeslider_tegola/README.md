# tegola-ohm.json

This style is based on DevSeed's HOT-OSM style for tiles served by Tegola, which we implemented for OHM in April/May 2020.


## The Style File and Sprite Sets

The file **tegola-ohm.json** is a JSON document describing a map style, and is compatible with Mapbox GL JS 1.x and MapLibre.

It is configured to load vector tiles from https://vtiles.openhistoricalmap.org/ then style accordingly.

The list of files is as follows:
- **tegola-ohm.json** -- The style file, which could work with Mapbox GL JS API or MapLibre, but see below about how we really use it.
- the in-development sprite set
  - **osm_tegola_spritesheet.json**
  - **osm_tegola_spritesheet.png**
  - **osm_tegola_spritesheet@2x.json**
  - **osm_tegola_spritesheet@2x.png**
- the production sprite set, which is copied from the development sprite set when deemed appropriate
  - **osm_tegola_spritesheet-production.json**
  - **osm_tegola_spritesheet-production.png**
  - **osm_tegola_spritesheet-production@2x.json**
  - **osm_tegola_spritesheet-production@2x.png**


## Updating the Production Sprite Set

The technique here is simply to copy the four files to their production counterparts e.g. **osm_tegola_spritesheet.json** to **osm_tegola_spritesheet-production.json** then add, commit, and push in the usual fashion so they become live on Github Pages.

For convenience, the **make_production_version.py** can do this as well. Usage is simply: `python make_production_version.py` or `python3 make_production_version.py`


## Production Code for OpenHistoricalMap.org

The style file **tegola-ohm.json** is not directly used by https://www.openhistoricalmap.org

Instead, the website code has executable JavaScript code so we can apply various transforms to it at runtime, e.g. changing the vector tile URL and the sprite set depending whether staging or production was requested. For further details, see https://github.com/OpenHistoricalMap/ohm-website/blob/staging/app/assets/javascripts/ohm.style.js

