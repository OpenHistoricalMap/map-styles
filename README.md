# Open Historical Map Styles
This repository contains vector map styles that can be applied to OHM vector tiles. 

The tile source is https://vtiles.openhistoricalmap.org/.

Here, you can save your worries about tile servers and data updates and instead just load a JSON file into https://maputnik.github.io/ and make some updates!

Style file to load in Maputnik:

- OHM style: https://openhistoricalmap.github.io/map-styles/main/main.json

- Woodblock style:  [https://github.com/OpenHistoricalMap/map-styles/blob/staging/woodblock/woodblock.json](https://raw.githubusercontent.com/OpenHistoricalMap/map-styles/staging/woodblock/woodblock.json)

Copy the vector-based style to your Mapbox account [here](https://api.mapbox.com/styles/v1/vanessa-gin/ckz5r3zdy001215ofoeq1k7wm.html?title=copy&access_token=pk.eyJ1IjoidmFuZXNzYS1naW4iLCJhIjoiY2t3d2dzYXhxMDNtZDJ1bGFsY2c5dXV3ciJ9.jJ1Ujxks-kpcwSiiNdemfA&zoomwheel=true&fresh=true#12.63/40.68942/-74.02352). Note: the data layers are a little different because Mapbox uses Streets v8 now, and OHM styles are on Streets v7, but the style elements are all there.

If you make changes you want to commit back here:
1. Clone the repo locally.
2. Load the style file.
3. Use Export to write a new JSON over the top of the old one on your local copy (or save a new style).
4. Commit and push the changes, which will then be available at a GH Pages URL similar to the one above.

If you make a new style, just change the URL for the style file with the new one you made.

Note that changes here do not publish automagically to the OHM website. The latest styles get deployed to staging/openhistoricalmap.org by updating the Git commit sha on the `staging` branch here https://github.com/OpenHistoricalMap/ohm-deploy/blob/b71bc19d95f00fbb96ec33bd5149e0cd1b454935/images/web/Dockerfile#L117

## Review styles while they are in staging
To review the styles with the latest updates to the map-styles repo before they are live, use the below links. These are pulled from the `staging` branch. The `staging` branch will reflect 1) recently made updates before they are merged into `main` and occassionally 2) iterative cartography testing. 

To see a specific year in history, change the target year in the URL:
- Main/Historical: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=O_staging
- Rail style: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=R_staging
- Woodblock: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=W_staging
- Japanese scroll: https://embed.openhistoricalmap.org/#map=16/40.70486/-74.01313&date=1700&layer=J_staging
