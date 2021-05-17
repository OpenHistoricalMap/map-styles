#!/bin/env python
"""
Read tegola-ohm.json and replace the service URLs, to create tegola-ohm-production.json
"""

# the two files
STYLE_FILE_IN = "tegola-ohm.json"
STYLE_FILE_OUT = "tegola-ohm-production.json"

URL_IN = "https://vtiles-staging.openhistoricalmap.org/"
URL_OUT = "https://vtiles.openhistoricalmap.org/"


################################################################################


class TileStyleRewriter:
    def __init__(self, filenamein, filenameout):
        self.filenamein = filenamein
        self.filenameout = filenameout


    def run(self):
        print("Rewriting {} to {}".format(self.filenamein, self.filenameout))

        with open(self.filenamein) as f:
            print("    {}  =>  {}".format(URL_IN, URL_OUT))
            newversion = f.read().replace(URL_IN, URL_OUT)
        with open(self.filenameout, "w") as f:
            f.write(newversion)


if __name__ == '__main__':
    TileStyleRewriter(STYLE_FILE_IN, STYLE_FILE_OUT).run()
