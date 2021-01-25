# Open Historical Map Styles
This repository contains vector map styles that can be applied to OHM vector tiles. 

The tile source is https://vtiles.openhistoricalmap.org/.

Here, you can save your worries about tile servers and data updates and instead just load a JSON file into https://maputnik.github.io/ and make some updates!

Here's the file to load in Maputnik: [https://openhistoricalmap.github.io/map-styles/ohm_timeslider_tegola/tegola-ohm.json](https://openhistoricalmap.github.io/map-styles/ohm_timeslider_tegola/tegola-ohm.json)

If you make changes you want to commit back here:
1. Clone the repo locally.
2. Load the style file.
3. Use Export to write a new JSON over the top of the old one on your local copy (or save a new style).
4. Commit and push the changes, which will then be avalaible at a GH Pages URL similar to the one above.

If you make a new style, just change the URL for the style file with the new one you made.

Note that changes here do not publish automagically to the OHM website. the vector tiles on the AWS staging site are stored as Javascript [here](https://github.com/Open-Historical-Map-Labs/ohm-website/blob/staging/app/assets/javascripts/ohm.style.js)

We also have a bare-bones, no timeslider demo of the style served on GH Pages at [openhistoricalmap.github.io/map-styles/demo.html](https://openhistoricalmap.github.io/map-styles/demo.html)
