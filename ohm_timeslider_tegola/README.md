# tegola-ohm.json

This style is based on DevSeed's HOT-OSM style for tiles served by Tegola, which we implemented for OHM in April/May 2020.


### Production & Staging Versions

The **tegola-ohm.json** style will point at https://vtiles-staging.openhistoricalmap.org/ for the source of tiles, simply because development of the style is often done on development data.

The style in **tegola-ohm-production.json** will instead point at https://vtiles.openhistoricalmap.org/ for production tiles.

Run `python make_production_version.py` to create the production-ready version from the development one. This runs on both Python 2 and 3.
