#!/bin/env python
"""
Copy the sprite files to their production names. Could do it manually but this is even simpler.
"""

# files to copy with a new name; each row is (fromname, toname)
FILES_TO_COPY = [
    ('ohm_spritezero_spritesheet.json', 'ohm_spritezero_spritesheet-production.json'),
    ('ohm_spritezero_spritesheet.png', 'ohm_spritezero_spritesheet-production.png'),
    ('ohm_spritezero_spritesheet@2x.json', 'ohm_spritezero_spritesheet-production@2x.json'),
    ('ohm_spritezero_spritesheet@2x.png', 'ohm_spritezero_spritesheet-production@2x.png'),
    ('tegola-ohm.json', 'tegola-ohm-production.json'),
]


################################################################################


import json
import datetime
import shutil


class SpriteFileCopier:
    def __init__(self, indentjson=False):
        self.files_to_copy = FILES_TO_COPY


    def run(self):
        print("Copying files")
        for filetocopy in self.files_to_copy:
            print("    {}  =>  {}".format(filetocopy[0], filetocopy[1]))
            shutil.copyfile(filetocopy[0], filetocopy[1])

        print("DONE")


if __name__ == '__main__':
    SpriteFileCopier().run()
