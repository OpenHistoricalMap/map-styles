# Documentation of Cartography of Main Style
## OpenHistoricalMap Design Principles
GreenInfo Network and OpenHistoricalMap's cartographic journey for the main historical style began many years ago with cataloging, reviewing, and analyzing some historical styles as inspiration. There were many considerations when reviewing old maps and how they could and would be applied to a brand new style for an OHM base map. In particular, we considered the below heavily:<br>

**1. Design for time, geography, and zoom level:** First and foremost, we needed to consider that the OpenHistoricalMap's main style would require a well thought out design that worked across all of time, and all geographies, across history. The cartographic choices would not simply be an attempt to style 1930’s America or 1700’s Japan, for example. While the map would be depicting history, the map style ultimately needed to work as a modern interactive map that had to _globally_  have a style that also worked across all zoom levels. From city streets to states to continents, a basic style would need to work for all of these scenarios <br><Br>
**2. An ever-expanding data landscape:** Similar to OpenStreetMap, the amount and variety of types of data is _massive_. the cartographic choices made for the main style would also need to coherently work across different types of data (... across time, across geographies, across zoom levels). Most maps - historical or modern - have a single purpose and are designed thoughtfully to support that particular purpose. With OpenHistorical map's purpose effectively being "design for all-things", it also meant that limiting the amount of data - the number of types of information displayed - would also need to be a consistent conversation in the beginning of the design work for the style, but also alongside the growth of the main style, as ever changing data additions would mean that OHM would need to have some kind of flexibility as well as rigidity to not have TOO many data layers shown in the single main style. <br>
<br>
## OHM Main Style History and Context
After some time, we settled on an aesthetic inspiration coming from Alexander Gross's 1950 Highway Map.<br>
<br>

<img src="https://github.com/user-attachments/assets/ccae22bd-2da9-487f-b8fd-2b7cd64b1bce" alt="1950 highway map of United States, by Alexander Gross. Zoomed in to area near the Great Lakes to showcase the aesthetic. Blue lakes, white-ish land color" width="900">
<img src="https://github.com/user-attachments/assets/00fbb9d8-e3e7-44b0-a0b7-bb13eccb7003" alt="1950 highway map of United States, by Alexander Gross. Zoomed in to area near San Francisco, highlighting the roadways and rail in black and red lines" width="900">
<br><br>
This seemed like a great inspiration for initial cartography. While Gross' map of course focused on highlighting highways, for the OHM style, we were inspired by the overall map, and liked how Gross used a handful of bright colors alongside a minimal amount of basic layers. Of particular inspirational was the dusty, dusky, blue-gray water; the warm off-white land color; and the bright colors and stark contrast of the highways against the light background. <br>
<br>
<img src="https://github.com/user-attachments/assets/5e4a891c-fbea-4c8b-9978-97120eceeeb4" alt="first draft of OHM style, bringing in some colors similar to Gross map.">
<br>
This first iterations of the OHM style brought in the inspiration from Boss' map into all data elements globally, at every zoom level. Highways, for example, were given a rust red color to make them stand out, as was very typical with vintage maps of this era. We pulled the water color almost directly from the 1950 Alexander Gross map posted above. This was a great starting point to get the OHM cartography ball rolling.

Using Maputnik, we applied this style to OHM data and began to test the cartography across different locations, zoom levels, and times throughout history. As the style was reviewed, it became clear that the strong focus on highways and car-centric roads was _not_ great for all locations across all times. We toned down the saturation of water and shifted all roads to white. Roads were still differentiated by width, cases, and shield symbols and labels. This gave us more of a basic cartographic palette to work with, and allowed us to emphasize a variety of types of data, not simply transportation layers.

After some time with this new iteration of the style, some OHM users and contributors expressed how they were missing the color differences for road types, and thought these differences had done a nice job of differentiating the types of roadways in the application. We created a few new options, returning to applying color to roads, but desaturated from our original designs - and settled on this symbology:
<img src="https://github.com/user-attachments/assets/057e258f-cf55-4332-92b4-0f69150013cc" alt="Map showing the aforementioned design changes.">

Interestingly, and maybe not surprisingly, the evolution of the OHM style started to pull away from the 1950s historical map style aesthetically, and more towards a modern interactive map style: this is largely because modern mapping simply requires us to consider a lot more data when doing so in an interactive map. We have to be able to find the right way to balance all of our layers’ symbologies more equally, which is where we are in our current approach. The below shows the style today:
<img src="https://github.com/user-attachments/assets/a94fe3ba-7266-4ecb-b27f-1781491bfa69" alt="OHM map today, showing the UK. The water color is brighter, the land color is a little lighter in color. Rail lines cross the map.">
<img src="https://github.com/user-attachments/assets/26cf161d-4a6c-4383-88c1-4355c015187d" alt="The map is zoomed into london, showcasing a lot of data at the ground level, such as shops and parks. Orange highways and white roads criss cross the map. The water color is brighter, the land color is a little lighter in color. Rail lines cross the map.">

## OHM Cartography Today, and in the Future
The current map's design still is inspired by and pulls from the original inspiration from Boss, and it also has gone through design choices in order to ensure new data or increases in data still showcase a balanced design. The data balancing is always the crux of shifting cartographic choices, and this is always where design shifts will lie in the future of OHM's cartography. Looking ahead, there also will always be new opportunities to bring in design influence from historical maps, **and** we must continue to balance the main style's data needs. 

For more vintage inspired styles, check out OHM's other styles. These allow for much more "historical style inspiration" in their aesthetics, largely _because_ there is far less data shown on the map. If those maps had to have the same amount of data as OHM's main style, the aesthetics would not remain the same.

